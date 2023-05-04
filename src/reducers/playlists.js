export const inicialPlaylists = [
  {
    id: 1,
    name: "Chama na bota",
    songs: [
      {
        id: 1,
        name: "Melhor Só",
        author: "Igor Bz",
      },
      {
        id: 2,
        name: "Diga pra mim",
        author: "Zezo",
      },
    ],
  },
];

export const reducerPlaylist = (state, action) => {
  let list = [];
  let index = 0;

  switch (action.type) {
    case "ADD_PLAYLIST":
      let newState = [...state];
      let idx = newState.findIndex((item) => item.name == action.payload.name);
      if (idx != -1) {
        newState.splice(action.payload.id - 1, 0, { ...action.payload });
      }
      return newState;
    case "DEL_PLAYLIST":
      list = [...state];
      index = list.findIndex((item) => item.id == action.payload);
      list.splice(index, 1);

      return list;
    case "CLEAR_PLAYLISTS":
      return [];
    default:
      return state;
  }
};
