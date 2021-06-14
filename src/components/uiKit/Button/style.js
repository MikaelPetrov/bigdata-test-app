import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
  ${({ fontSize }) => `font-size: ${fontSize}`};
  ${({ height }) => `height: ${height}`};
  ${({ width }) => `width: ${width}`};
  ${({ maxWidth }) => `max-width: ${maxWidth}`};
  ${({ margin }) => `margin: ${margin}`};
  ${({ padding }) => `padding: ${padding}`};
  ${({ color }) => `color: ${color}`};
  ${({ borderRadius }) => `border-radius: ${borderRadius}`};
  ${({ background }) => `background: ${background}`};

  &:hover {
    ${({ colorModifier }) => `color: ${colorModifier}`};
    ${({ backgroundModifier }) => `background: ${backgroundModifier}`};
  }
`;
