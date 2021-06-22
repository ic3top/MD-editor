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
export const image = createNewCommand('  \n![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)');
export const quote = createNewCommand('  \n> Coffee. The finest organic suspension ever devised... I beat the Borg with it.');
export const code = createNewCommand('  \n```javascript'
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
