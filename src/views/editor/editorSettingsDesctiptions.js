const descriptions = {
  strikethrough: 'Enable support for strikethrough syntax. <code>~~strikethrough~~</code> as <del>strikethrough</del>',
  tablesHeaderId: 'If enabled adds an id property to table headers tags.',
  tasklists: `
  Enable support for GFM tasklists. Example:
  <pre><code>
    - [x] This task is done
    - [ ] This is still pending
  </code></pre>
 `,
  parseImgDimensions: `
  Enable support for setting image dimensions from within markdown syntax. Examples:
  <pre><code>
  simple, assumes units are in px
  ![foo](foo.jpg =100x80)

  sets the height to "auto"
  ![bar](bar.jpg =100x*)
  </code></pre>
  `,
  smoothLivePreview: 'Prevents weird effects in live previews due to incomplete input',
  tables: `
  Enable support for tables syntax. Example:
  <pre><code>
  | h1    |    h2   |      h3 |
  |:------|:-------:|--------:|
  | 100   | [a][1]  | ![b][2] |
  | *foo* | **bar** | ~~baz~~ |
  </code></pre>
  See the wiki for more info
  `,
  customizedHeaderId: `
  Use text in curly braces as header id. Example:<br>
  <code>## Sample header {real-id}</code><br>will use real-id as id
  `,
  emoji: 'Enable emoji support. Ex: this is a <code>:smile:</code> emoji',
  simplifiedAutoLink: `
  Turning this option on will enable automatic linking to urls. This means that:<br>
  <code>some text www.google.com</code><br>
  will be parsed as<br>
  <code><p>some text <a href="www.google.com">www.google.com</a></code>
  `,
  syncScroll: 'Turning this option on will enable synchronous scrolling (may not work well for large amounts of text).',
};

export default descriptions;
