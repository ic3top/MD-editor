import showdown from 'showdown';

const defaultOptions = {
  strikethrough: true,
  tablesHeaderId: true,
  tasklists: true,
  parseImgDimensions: true,
  smoothLivePreview: true,
  tables: true,
  customizedHeaderId: true,
  emoji: true,
};

/**
 * Converts a markdown text into HTML
 *
 * @param {string} markdown The markdown string to be converted to HTML
 * @param {object} options The converter options
 * @returns {string} The converted HTML
 */
export default function (markdown, options = defaultOptions) {
  showdown.setOption('strikethrough', true);
  const converter = new showdown.Converter(options);
  return converter.makeHtml(markdown);
}
