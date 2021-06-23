import { UPDATE_CONTENT_BY_FILE_NAME } from '@/store/mutations-types';
import store from '../../store';

function createNewCommand(content) {
  // eslint-disable-next-line func-names
  return function (name) {
    store.commit(UPDATE_CONTENT_BY_FILE_NAME, ({ name, content }));
  };
}

export const heading = createNewCommand('  \n# Heading-h1');
export const bold = createNewCommand('  \n**bold**');
export const italic = createNewCommand('  \n_italic_');
export const strikethrough = createNewCommand('  \n~~strikethrough~~');
export const image = createNewCommand('  \n![alt text](https://picsum.photos/400)');
export const quote = createNewCommand('  \n> Coffee. The finest organic suspension ever devised... I beat the Borg with it.\n');
export const code = createNewCommand('  \n```javascript\n'
  + 'if (isAwesome){\n'
  + '  return true\n'
  + '}\n'
  + '```');
export const link = createNewCommand('  \n[GitHub](http://github.com)');
export const taskList = createNewCommand('  \n- [x] check-list');
export const unOrderedList = createNewCommand('  \n* Unordered-list');
export const orderedList = createNewCommand('  \n1. Ordered-list');
export const table = createNewCommand('  \n| text1 | text2 |\n'
  + '|--|--|\n'
  + '| content1 | content2 |');
