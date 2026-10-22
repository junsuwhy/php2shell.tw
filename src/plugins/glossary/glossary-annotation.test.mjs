// 執行：node --test src/plugins/glossary/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
import { mdxToJs, markdownToHtml } from 'satteri';
import glossaryAnnotation, { loadGlossary } from './index.mjs';
import { createMatcher } from './matcher.mjs';

const entries = [
  { id: 'rce', term: 'RCE', aliases: ['遠端程式碼執行'], note: 'RCE 的註' },
  { id: 'php-fpm', term: 'PHP-FPM', aliases: ['FPM'], note: 'PHP-FPM 的註' },
  { id: 'worker', term: 'worker', aliases: [], note: 'worker 的註' },
  { id: 'session', term: 'session', aliases: [], note: 'session 的註' },
  { id: 'upload', term: 'session upload-progress', aliases: ['session.upload_progress'], note: '上傳進度的註' },
];

const devFile = pathToFileURL('/project/src/pages/dev/example.mdx');
const basicFile = pathToFileURL('/project/src/pages/basic/example.mdx');

function compile(source, fileURL = devFile) {
  const plugin = glossaryAnnotation({ entries, style: false });
  return mdxToJs(source, { mdastPlugins: [plugin], fileURL }).code;
}
const count = (haystack, needle) => haystack.split(needle).length - 1;

test('長詞優先，且不在英文識別字中間誤配', () => {
  const { scan } = createMatcher(entries);
  assert.deepEqual(scan('跑 PHP-FPM 的主機').map((h) => h.text), ['PHP-FPM']);
  assert.deepEqual(scan('只寫 FPM 也算').map((h) => h.text), ['FPM']);
  assert.deepEqual(scan('xFPM、foo-FPM、FPMs、workers').map((h) => h.text), []);
  assert.deepEqual(scan('session.upload_progress 與 session').map((h) => h.text), ['session.upload_progress', 'session']);
  assert.deepEqual(scan('重啟worker。').map((h) => h.text), ['worker']);
});

test('每頁只標第一次，並在段落下方輸出註解', () => {
  const code = compile('第一段提到 RCE 與 worker。\n\n第二段又提到 RCE，還有 PHP-FPM。\n');
  assert.equal(count(code, 'id: "gl-term-rce"'), 1);
  assert.equal(count(code, 'id: "gl-note-rce"'), 1);
  assert.equal(count(code, 'id: "gl-note-php-fpm"'), 1);
  assert.match(code, /"aria-describedby": "gl-note-rce"/);
  // 第一段的註解出現在第二段之前（段落下方，而不是頁尾）。
  assert.ok(code.indexOf('gl-note-worker') < code.indexOf('第二段'));
});

test('註解是預設收合的 details，summary 列出正文裡的名詞', () => {
  const code = compile('第一段提到 RCE 與 worker。\n');
  assert.match(code, /details: "details"/);
  assert.match(code, /summary: "summary"/);
  assert.match(code, /_components\.details/);
  assert.match(code, /_components\.summary/);
  assert.equal(code.includes('_components.aside'), false);
  assert.match(code, /children: "註：RCE、worker"/);
  assert.equal(code.includes('"open"'), false);
  assert.match(code, /id: "gl-term-rce"/);
  assert.match(code, /"aria-describedby": "gl-note-rce"/);
  assert.match(code, /id: "gl-note-rce"/);
  // summary 在註解的 dl 之前，詞的 id 仍在 dd 上。
  assert.ok(code.indexOf('註：RCE、worker') < code.indexOf('className: "glossary-note__list"'));
});

test('別名命中時以別名標註、註解列出正式名稱', () => {
  const code = compile('這是遠端程式碼執行的問題。\n');
  assert.match(code, /children: "遠端程式碼執行（RCE）"/);
  assert.match(code, /children: "註：遠端程式碼執行"/);
});

test('程式碼、標題、連結內不標註，也不觸發註解', () => {
  const code = compile([
    '# 標題裡的 RCE',
    '',
    '行內 `RCE` 與 [RCE](/dev/) 都不算。',
    '',
    '```sh',
    'echo RCE',
    '```',
    '',
  ].join('\n'));
  assert.equal(count(code, 'gl-term-'), 0);
  assert.equal(count(code, 'glossary-note'), 0);
});

test('程式碼裡出現過的詞，正文第一次出現時仍會標註', () => {
  const code = compile('行內 `worker` 不算。\n\n正文的 worker 才算。\n');
  assert.equal(count(code, 'id: "gl-term-worker"'), 1);
  assert.ok(code.indexOf('gl-term-worker') > code.indexOf('正文的'));
});

test('/basic/ 與一般 Markdown 不啟用', () => {
  assert.equal(count(compile('RCE 與 worker。\n', basicFile), 'gl-term-'), 0);
  const plugin = glossaryAnnotation({ entries, style: false });
  const { html } = markdownToHtml('RCE\n', { mdastPlugins: [plugin], fileURL: devFile });
  assert.ok(!html.includes('dfn'));
});

test('frontmatter glossary: false 可關閉單頁', () => {
  const plugin = glossaryAnnotation({ entries, style: false });
  const code = mdxToJs('RCE\n', {
    mdastPlugins: [plugin],
    fileURL: devFile,
    data: { astro: { frontmatter: { glossary: false } } },
  }).code;
  assert.equal(count(code, 'gl-term-'), 0);
});

test('實際名詞表可以載入且每筆都有 note', () => {
  const real = loadGlossary();
  assert.ok(real.length > 0);
  for (const e of real) assert.ok(e.note, e.id);
});
