import styled from 'styled-components';

export const Select = styled.div`
  font-size: 15px;
  color: white;
  width: 15%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #303030;
  text-decoration: gold underline;
  text-decoration-skip-ink: 20px;

  @media (max-width: 1080px) {
    display: none;
  }
`;
