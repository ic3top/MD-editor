export default function saveStatePlugin(store) {
  store.subscribe((mutation, state) => {
    localStorage.setItem('allFiles', JSON.stringify(state.files.allFiles));
  });
}
