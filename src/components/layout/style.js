import styled from 'styled-components';

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-width: 375px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  color: #919191;
`;

export const LayoutHeader = styled.div`
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: left;
  background: #1d1d1d;
`;

export const LayoutMenuItem = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.25s ease-in-out;
  ${({ color }) => `color: ${color ? color : 'auto'}`};
  ${({ background }) => `background: ${background ? background : 'auto'}`};

  &:hover {
    color: #fff;
    background: #4a4a4a;
  }
`;

export const LayoutContent = styled.div`
  flex: 1 0 auto;
  background: #fff;
`;

export const LayoutFooter = styled.div`
  flex: 0 0 auto;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #171717;
`;
