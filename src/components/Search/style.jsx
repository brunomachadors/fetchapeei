import styled from 'styled-components';

export const SearchContainer = styled.div`
  background-color: rgba(253, 243, 233, 1);
  height: 160px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
`;

export const SearchInput = styled.input`
  background-color: rgba(253, 243, 233, 1);
  width: 70%;
  max-width: 480px;
  height: 30px;
  position: relative;
`;

export const LensIcon = styled.img`
  width: 30px;
  position: relative;
  margin-right: 30px;
`;
