import { useState } from 'react';
import { LensIcon, SearchContainer, SearchInput } from './style';

export function Search() {
  const [isInputVisible, setInputVisible] = useState(false);

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };

  return (
    <SearchContainer>
      {isInputVisible && (
        <SearchInput type="text" placeholder="Search..."></SearchInput>
      )}
      <LensIcon
        src="../src/assets/icons/searchIcon.png"
        onClick={toggleInputVisibility}
      ></LensIcon>
    </SearchContainer>
  );
}
