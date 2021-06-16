import { createStore } from 'vuex';
import saveStatePlugin from './saveStatePlugin';
import files from './modules/files';

export default createStore({
  plugins: [saveStatePlugin],
  state: {},
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    files,
  },
});
