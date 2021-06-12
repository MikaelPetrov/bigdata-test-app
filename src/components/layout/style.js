import styled from 'styled-components';

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-width: 375px;
  margin: 0 auto;
  color: #fff;
`;

export const LayoutHeader = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #1d1d1d;
  border-bottom: 1px solid #2f2f2f;
`;

export const LayoutContent = styled.div`
  height: calc(100vh - 202px);
  background: #fff;
`;

export const LayoutFooter = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #171717;
  border-top: 1px solid #2f2f2f;
`;
