export const initialSongs = [
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
];

export const reducerSongs = (state, action) => {
  let list = [];
  let index = 0;

  switch (action.type) {
    case "ADD_SONG":
      let newState = [...state];
      let idx = newState.findIndex((item) => item.name == action.payload.name);
      if (idx != -1) {
        newState.splice(action.payload.id - 1, 0, { ...action.payload });
      }
      return newState;
    case "DEL_SONG":
      list = [...state];
      index = list.findIndex((item) => item.id == action.payload);
      list.splice(index, 1);

      return list;
    case "CLEAR_SONGS":
      return [];
    default:
      return state;
  }
};
