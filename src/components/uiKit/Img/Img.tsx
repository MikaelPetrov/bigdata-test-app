import { memo } from 'react';
import { StyledImage } from './style';
import { TypeImgProps } from './type';

const Img: React.FC<TypeImgProps> = (props) => {
  const imageStyleProps = {
    src: props.src,
    height: props.height,
    width: props.width,
    margin: props.margin,
    borderRadius: props.borderRadius,
    aspectRatio: props.aspectRatio,
    cursor: props.cursor,
    onClick: props.onClick,
  };

  return (
    <StyledImage {...imageStyleProps} data-name="styled-img" alt="image-icon" />
  );
};

export default memo(Img);
