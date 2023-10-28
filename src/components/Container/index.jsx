import Content from "./Content";
import SideBar from "./SideBar";
import { StyledContainer } from "./style";

function Container() {
  return (
    <StyledContainer>
      <Content></Content>
      <SideBar></SideBar>
    </StyledContainer>
  );
}

export default Container;
