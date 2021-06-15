import * as CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';

// theme
import 'codemirror/theme/material-ocean.css';

// modes
import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';

// active line addon
import 'codemirror/addon/selection/active-line';

// fullscreen addon
import 'codemirror/addon/display/fullscreen';
import 'codemirror/addon/display/fullscreen.css';

// scrollbar addon
import 'codemirror/addon/scroll/simplescrollbars.css';
import 'codemirror/addon/scroll/simplescrollbars';

import code from '../defaultText';

export default function getEditor(selectorId) {
  const editor = CodeMirror.fromTextArea(document.getElementById(selectorId), {
    lineNumbers: true,
    lineWrapping: true,
    theme: 'material-ocean',
    mode: 'gfm',
    styleActiveLine: true,
    scrollbarStyle: 'overlay',
    extraKeys: {
      F11(cm) {
        cm.setOption('fullScreen', !cm.getOption('fullScreen'));
      },
      Esc(cm) {
        if (cm.getOption('fullScreen')) cm.setOption('fullScreen', false);
      },
    },
  });
  editor.getDoc().setValue(code);

  return editor;
}
