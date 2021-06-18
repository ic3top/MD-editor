import { CHANGE_EDITOR_MODE } from '../mutations-types';

const savedMode = JSON.parse(localStorage.getItem('editorMode')) || 'default';

const editorMode = {
  state: {
    editorMode: savedMode,
  },
  mutations: {
    [CHANGE_EDITOR_MODE](state, { mode }) {
      state.editorMode = mode;
    },
  },
  getters: {
    getEditorMode(state) {
      return state.editorMode;
    },
  },
};

export default editorMode;
