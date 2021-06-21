import { UPDATE_EDITOR_SETTINGS } from '../mutations-types';

const defaultSettings = {
  strikethrough: true,
  tablesHeaderId: true,
  tasklists: true,
  parseImgDimensions: true,
  smoothLivePreview: true,
  tables: true,
  customizedHeaderId: true,
  emoji: true,
  simplifiedAutoLink: false,
  syncScroll: true,
};

const settings = JSON.parse(localStorage.getItem('editorSettings')) || defaultSettings;

const editorSettings = {
  state: {
    settings,
  },
  mutations: {
    [UPDATE_EDITOR_SETTINGS](state, newSettings = {}) {
      state.settings = newSettings;
    },
  },
  getters: {
    getEditorSettings(state) {
      return state.settings;
    },
  },
};

export default editorSettings;
