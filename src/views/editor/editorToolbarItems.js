import { UPDATE_CONTENT_BY_FILE_NAME } from '@/store/mutations-types';
import store from '../../store';

function createNewCommand(content) {
  return function updateEditorContent(name) {
    store.commit(UPDATE_CONTENT_BY_FILE_NAME, ({ name, content }));
  };
}

export default function getEditToolbarItems(name) {
  return [
    {
      label: 'heading',
      command: () => createNewCommand('  \n# Heading-h1')(name),
    },
    {
      label: 'bold',
      command: () => createNewCommand('  \n**bold**')(name),
    },
    {
      label: 'italic',
      command: () => createNewCommand('  \n_italic_')(name),
    },
    {
      label: 'strikethrough',
      command: () => createNewCommand('  \n~~strikethrough~~')(name),
    },
    {
      label: 'image',
      icon: 'pi pi-fw pi-image',
      command: () => createNewCommand('  \n![alt text](https://picsum.photos/400)')(name),
    },
    {
      label: 'quote',
      command: () => createNewCommand('  \n> Coffee. The finest organic suspension ever devised... I beat the Borg with it.\n')(name),
    },
    {
      label: 'code',
      command: () => createNewCommand('  \n```javascript\n'
  + 'if (isAwesome){\n'
  + '  return true\n'
  + '}\n'
  + '```')(name),
    },
    {
      label: 'link',
      icon: 'pi pi-fw pi-link',
      command: () => createNewCommand('  \n[GitHub](http://github.com)')(name),
    },
    {
      label: 'table',
      icon: 'pi pi-fw pi-table',
      command: () => createNewCommand('  \n| text1 | text2 |\n'
  + '|--|--|\n'
  + '| content1 | content2 |')(name),
    },
    {
      label: 'list',
      icon: 'pi pi-fw pi-list',
      items: [
        {
          label: 'unordered',
          command: () => createNewCommand('  \n* Unordered-list')(name),
        },
        {
          label: 'ordered',
          command: () => createNewCommand('  \n1. Ordered-list')(name),
        },
        {
          label: 'tasks',
          command: () => createNewCommand('  \n- [x] check-list')(name),
        },
      ],
    },
  ];
}
