import { ContentView } from "../contentView";
import { SideMenu } from "../sideMenu";
import * as C from "./styled";

export const Theme = () => {
  return (
    <>
      <C.MainHeader>
        <h1>Spotify</h1>
      </C.MainHeader>
      <C.MainContainer>
        <ContentView />
        <SideMenu />
      </C.MainContainer>
    </>
  );
};
