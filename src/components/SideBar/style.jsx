import styled from 'styled-components';

export const Bar = styled.div`
  background-color: rgba(38, 38, 38, 1);
  width: 17.6%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  color: white;
  overflow-y: auto;
  box-sizing: border-box;

  @media (max-width: 1080px) {
    height: 25%;
    width: 100%;
    justify-content: flex-start;
  }
`;

export const Title = styled.h1``;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AdditionalInfo = styled.p``;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  color: white;
  :hover {
    border-left: 4px solid gold;
  }

  @media (max-width: 1080px) {
    display: flex;
    font-size: 10px;
  }
`;

export const Button = styled.button`
  width: 100%;

  :hover {
    border: none;
  }
`;

export const Item = styled.li`
  width: 100%;
  margin-top: 30px;
  color: white;

  :hover {
    border: none;
  }
`;

export const Name = styled.p`
  :hover {
    border: none;
  }
`;
