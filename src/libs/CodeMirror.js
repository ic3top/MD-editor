import * as CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';

// theme
import 'codemirror/theme/material-ocean.css';

// modes
import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/javascript/javascript';

// active line addon
import 'codemirror/addon/selection/active-line';

// fullscreen addon
import 'codemirror/addon/display/fullscreen';
import 'codemirror/addon/display/fullscreen.css';

// scrollbar addon
import 'codemirror/addon/scroll/simplescrollbars.css';
import 'codemirror/addon/scroll/simplescrollbars';

/**
 * Converts a markdown text into HTML
 *
 * @param {string} selectorId The selector if the element to insert CodeMirror
 * @returns {string} CodeMirror instance
 */
export default function createEditor(selectorId) {
  const editor = CodeMirror.fromTextArea(document.getElementById(selectorId), {
    lineNumbers: true,
    lineWrapping: true,
    theme: 'material-ocean',
    mode: 'gfm',
    styleActiveLine: true,
    scrollbarStyle: 'overlay',
    extraKeys: {},
  });

  return editor;
}
