import { createStore } from 'vuex';
import saveStatePlugin from './saveStatePlugin';
import files from './modules/files';
import editorMode from './modules/editorMode';
import editorSettings from './modules/editorSettings';

export default createStore({
  plugins: [saveStatePlugin],
  modules: {
    files,
    editorMode,
    editorSettings,
  },
});
