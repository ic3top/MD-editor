import defaultContent from '@/defaultContent';
import {
  CHANGE_CONTENT_BY_FILE_NAME,
  CREATE_NEW_FILE,
  DELETE_FILE,
  CHANGE_FILE_NAME,
} from '../mutations-types';

const allFiles = JSON.parse(localStorage.getItem('allFiles')) || defaultContent;

const files = {
  state: {
    allFiles,
  },
  mutations: {
    [CHANGE_CONTENT_BY_FILE_NAME](state, { name, content }) {
      state.allFiles[name] = content;
    },
    [CREATE_NEW_FILE](state, { name, content = '' }) {
      if (state.allFiles[name]) throw Error(`File with name '${name}' already exists`);
      state.allFiles[name] = content;
    },
    [DELETE_FILE](state, { name }) {
      delete state.allFiles[name];
    },
    [CHANGE_FILE_NAME](state, { oldName, newName }) {
      const value = state.allFiles[oldName];
      delete state.allFiles[oldName];
      state.allFiles[newName] = value;
    },
  },
  getters: {
    getAllFiles(state) {
      return state.allFiles;
    },
    getAllFileNames(state) {
      return Object.keys(state.allFiles);
    },
    getFileItems(state, getters) {
      return getters.getAllFileNames.reduce((items, name) => {
        items.push({ label: name, to: `/files/${name}` });
        return items;
      }, []);
    },
    getContentByFileName(state) {
      return function (name) {
        if (state.allFiles[name] === undefined) {
          throw Error(`There is no file with name ${name}`);
        }
        return state.allFiles[name];
      };
    },
  },
  actions: {
  },
  modules: {
  },
};

export default files;
