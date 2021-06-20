export default function saveStatePlugin(store) {
  store.subscribe((mutation, state) => {
    localStorage.setItem('allFiles', JSON.stringify(state.files.allFiles));

    // module -> editorMode; property -> editorMode
    localStorage.setItem('editorMode', JSON.stringify(state.editorMode.editorMode));

    localStorage.setItem('converterSettings', JSON.stringify(state.converterSettings.settings));
  });
}
