import { UPDATE_CONVERTER_SETTINGS } from '../mutations-types';

const defaultSettings = {
  strikethrough: true,
  tablesHeaderId: true,
  tasklists: true,
  parseImgDimensions: true,
  smoothLivePreview: true,
  tables: true,
  customizedHeaderId: true,
  emoji: true,
};
const settings = JSON.parse(localStorage.getItem('converterSettings')) || defaultSettings;

const converterSettings = {
  state: {
    settings,
  },
  mutations: {
    [UPDATE_CONVERTER_SETTINGS](state, newSettings = {}) {
      state.settings = newSettings;
    },
  },
  getters: {
    getConverterSettings(state) {
      return state.settings;
    },
  },
};

export default converterSettings;
