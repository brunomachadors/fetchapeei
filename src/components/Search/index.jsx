import { LensIcon, SearchContainer, SearchInput } from './style';

export function Search() {
  return (
    <SearchContainer>
      <SearchInput></SearchInput>
      <LensIcon src="src/assets/icons/searchIcon.png"></LensIcon>
    </SearchContainer>
  );
}
