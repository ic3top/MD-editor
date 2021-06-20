import { createStore } from 'vuex';
import saveStatePlugin from './saveStatePlugin';
import files from './modules/files';
import editorMode from './modules/editorMode';
import converterSettings from './modules/converterSettings';

export default createStore({
  plugins: [saveStatePlugin],
  modules: {
    files,
    editorMode,
    converterSettings,
  },
});
