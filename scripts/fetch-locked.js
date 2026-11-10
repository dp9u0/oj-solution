// Batch-fetch premium (paid_only) problems from leetcode.cn.
//
// Usage:
//   node scripts/fetch-locked.js meta   # metadata only, works WITHOUT membership
//   node scripts/fetch-locked.js full   # + description body, requires PLUS session
//
// Output: resources/locked/meta/<fid>.<slug>.json   (always)
//         resources/locked/full/<fid>.<slug>.md     (full mode, readable description)
//
// Resumable: already-fetched problems are skipped; re-run to fill gaps.
// Session is read from ~/.lc/leetcode.cn/user.json (written by `lc`).

'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');

const CATEGORY = 'algorithms';
const ROOT = path.join(__dirname, '..', 'resources', 'locked');
const META_DIR = path.join(ROOT, 'meta');
const FULL_DIR = path.join(ROOT, 'full');

const DELAY_MS = 350;   // between requests
const RETRIES = 3;

const mode = process.argv[2] || 'meta';
if (mode !== 'meta' && mode !== 'full') {
  console.error('unknown mode: ' + mode + ' (use meta | full)');
  process.exit(1);
}

const sessionFile = path.join(os.homedir(), '.lc', 'leetcode.cn', 'user.json');
const session = JSON.parse(fs.readFileSync(sessionFile));
const headers = {
  'Content-Type': 'application/json',
  'Cookie': 'LEETCODE_SESSION=' + session.sessionId + ';csrftoken=' + session.sessionCSRF + ';',
  'X-CSRFToken': session.sessionCSRF,
  'X-Requested-With': 'XMLHttpRequest',
  'Origin': 'https://leetcode.cn',
  'Referer': 'https://leetcode.cn',
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function fetchList() {
  const resp = await fetch('https://leetcode.cn/api/problems/' + CATEGORY + '/', { headers });
  const list = await resp.json();
  if (!list.stat_status_pairs) throw new Error('bad list response');
  return list.stat_status_pairs
    .filter(p => p.paid_only)
    .map(p => ({
      fid: String(p.stat.frontend_question_id),
      slug: p.stat.question__title_slug,
      name: p.stat.question__title || '',
      level: ({ 1: 'Easy', 2: 'Medium', 3: 'Hard' })[p.difficulty.level] || '?',
      percent: Math.round(p.stat.total_acs * 100 / p.stat.total_submitted * 100) / 100,
      aced: p.status === 'ac',
    }));
}

async function fetchDetail(slug) {
  const gql = {
    query: `query getQuestionDetail($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        translatedTitle translatedContent content
        codeDefinition sampleTestCase metaData hints difficulty
      }
    }`,
    variables: { titleSlug: slug },
    operationName: 'getQuestionDetail',
  };
  for (let i = 1; i <= RETRIES; i++) {
    try {
      const resp = await fetch('https://leetcode.cn/graphql', {
        method: 'POST', headers, body: JSON.stringify(gql),
      });
      if (resp.status !== 200) throw new Error('http ' + resp.status);
      const body = await resp.json();
      if (body.errors) throw new Error(body.errors[0].message);
      const q = body.data.question;
      if (!q) throw new Error('question is null');
      return q;
    } catch (e) {
      if (i === RETRIES) throw e;
      await sleep(1000 * i);
    }
  }
}

const stripTags = html => (html || '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&amp;/g, '&')
  .replace(/[ \t]+/g, ' ')
  .replace(/ ?\n ?/g, '\n')
  .trim();

function renderMd(p, q) {
  const lines = [];
  lines.push('# ' + p.fid + '. ' + (q.translatedTitle || p.name));
  lines.push('');
  lines.push('* algorithms');
  lines.push('* ' + p.level + ' (' + p.percent + ' %)');
  lines.push('');
  lines.push('https://leetcode.cn/problems/' + p.slug + '/description/');
  lines.push('');
  lines.push(stripTags(q.translatedContent || q.content || ''));
  const hints = (q.hints || []).map(stripTags).filter(Boolean);
  if (hints.length) {
    lines.push('');
    lines.push('## Hints');
    hints.forEach((h, i) => lines.push((hints.length > 1 ? (i + 1) + '. ' : '') + h));
  }
  if (q.sampleTestCase) {
    lines.push('');
    lines.push('**Testcase Example:** `' + q.sampleTestCase + '`');
  }
  lines.push('');
  return lines.join('\n');
}

(async () => {
  fs.mkdirSync(META_DIR, { recursive: true });
  if (mode === 'full') fs.mkdirSync(FULL_DIR, { recursive: true });

  const problems = await fetchList();
  console.log('locked problems: ' + problems.length);

  let done = 0, skipped = 0, failed = [];
  for (const p of problems) {
    const metaFile = path.join(META_DIR, p.fid + '.' + p.slug + '.json');
    const fullFile = path.join(FULL_DIR, p.fid + '.' + p.slug + '.md');

    if (mode === 'meta' && fs.existsSync(metaFile)) { skipped++; continue; }
    if (mode === 'full' && fs.existsSync(fullFile)) { skipped++; continue; }

    try {
      const q = await fetchDetail(p.slug);
      const hasDescription = !!(q.translatedContent || q.content);
      const meta = {
        fid: p.fid, slug: p.slug, name: q.translatedTitle || p.name,
        englishName: p.name, level: p.level, percent: p.percent,
        hints: q.hints || [], sampleTestCase: q.sampleTestCase || null,
        hasDescription, fetchedAt: new Date().toISOString().slice(0, 10),
      };
      fs.writeFileSync(metaFile, JSON.stringify(meta, null, 1) + '\n');

      if (mode === 'full' && hasDescription) {
        fs.writeFileSync(fullFile, renderMd(p, q));
      } else if (mode === 'full') {
        failed.push(p.fid + ' (no description — session likely has no PLUS)');
      }
      done++;
      process.stdout.write('\r' + mode + ': ' + done + ' fetched, ' + skipped + ' skipped, ' + failed.length + ' failed');
    } catch (e) {
      failed.push(p.fid + ' (' + e.message + ')');
    }
    await sleep(DELAY_MS);
  }
  console.log('');
  console.log('done: ' + done + ' fetched, ' + skipped + ' skipped, ' + failed.length + ' failed');
  if (failed.length) {
    console.log('failed items:');
    failed.forEach(f => console.log('  ' + f));
  }
})().catch(e => { console.error('fatal: ' + e.message); process.exit(1); });
