import styled from 'styled-components';

export const StyledImage = styled.img`
  ${({ height }) => `height: ${height ?? `auto`}`};
  ${({ width }) => `width: ${width ?? `auto`}`};
  ${({ margin }) => `margin: ${margin ?? `auto`}`};
  ${({ borderRadius }) => `border-radius: ${borderRadius ?? `none`}`};
  ${({ aspectRatio }) => `aspect-ratio: ${aspectRatio ?? `auto`}`};
  ${({ cursor }) => `cursor: ${cursor ?? `auto`}`};
`;
