import showdown from 'showdown';
import store from '../store';

/**
 * Converts a markdown text into HTML
 *
 * @param {string} markdown The markdown string to be converted to HTML
 * @returns {string} The converted HTML
 */
export default function (markdown) {
  const defaultOptions = store.getters.getEditorSettings;
  const converter = new showdown.Converter(defaultOptions);
  return converter.makeHtml(markdown);
}
