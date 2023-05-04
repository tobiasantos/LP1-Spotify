import * as C from "./styled";

export const MenuOption = ({ type }) => {
  const labelConstructor = (type) => {
    if (type == "add-song") {
      return <h3>Adicione uma música</h3>;
    } else if (type == "create-playlist") {
      return <h3>Crie uma Playlist</h3>;
    } else if (type == "add-to-list") {
      return <h3>Adicione uma música à playlist</h3>;
    }
  };

  const optionConstructor = (type) => {
    if (type == "add-song") {
      return (
        <C.OptionContainer>
          {labelConstructor(type)}
          <div className="input">
            <input type="text" placeholder="ex.: Autor - Música" />
            <button>Adicionar</button>
          </div>
        </C.OptionContainer>
      );
    } else if (type == "create-playlist") {
      return (
        <C.OptionContainer>
          {labelConstructor(type)}
          <input type="text" placeholder="ex.: Insira nome da playlist" />
        </C.OptionContainer>
      );
    } else if (type == "add-to-list") {
      return (
        <C.OptionContainer>
          {labelConstructor(type)}
          <input type="text" placeholder="Insira nome da música" />
        </C.OptionContainer>
      );
    }
  };
  return <>{optionConstructor(type)}</>;
};
