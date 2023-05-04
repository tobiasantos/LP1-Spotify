import { MenuOption } from "../menuOption";
import * as C from "./styled";

export const SideMenu = () => {
  return (
    <C.Container>
      <div className="header">
        <h2>Edite músicas e playlists</h2>
      </div>
      <div className="content">
        <MenuOption type="add-song" />
        <MenuOption type="create-playlist" />
        <MenuOption type="add-to-list" />
      </div>
    </C.Container>
  );
};
