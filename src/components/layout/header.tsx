import styled from 'styled-components';

const HeaderStyle = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  width: 100%;
  height: 60px;
  position: fixed;
`;

export default function Header() {
  return <HeaderStyle></HeaderStyle>;
}
