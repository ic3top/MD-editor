import showdown from 'showdown';

/**
 * Converts a markdown text into HTML
 *
 * @param {string} markdown The markdown string to be converted to HTML
 * @returns {string} The converted HTML
 */
export default function (markdown) {
  showdown.setOption('strikethrough', true);
  const converter = new showdown.Converter({
    strikethrough: true,
    tablesHeaderId: true,
    tasklists: true,
    parseImgDimensions: true,
    smoothLivePreview: true,
  });
  return converter.makeHtml(markdown);
}
