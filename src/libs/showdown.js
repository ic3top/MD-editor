import showdown from 'showdown';
import store from '../store';

const defaultOptions = store.getters.getConverterSettings;

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
