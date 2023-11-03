import styled from 'styled-components';

export const Select = styled.div`
  font-size: 15px;
  color: white;
  width: 320px;
  min-width: 320px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #303030;
  text-decoration: #ffd900a3 underline;
  text-decoration-skip-ink: 20px;

  @media (max-width: 1080px) {
    display: none;
  }
`;
