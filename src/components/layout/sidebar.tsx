import styled from 'styled-components';

const SidebarStyle = styled.div`
  background-color: #8b8888;
  color: #fff;
  padding: 1rem;
  width: 200px;
  min-height: 100vh;
  position: fixed;
  margin-top: 60px;
`;

export default function Sidebar() {
  return (
    <SidebarStyle>
      <nav></nav>
    </SidebarStyle>
  );
}
