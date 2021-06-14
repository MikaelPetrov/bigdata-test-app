import { memo } from 'react';
import { StyledButton } from './style';
import { TypeButtonProps } from './type';

const Button: React.FC<TypeButtonProps> = (props) => {
  const buttonStyleProps = {
    fontSize: props.fontSize,
    height: props.height,
    width: props.width,
    maxWidth: props.maxWidth,
    margin: props.margin,
    padding: props.padding,
    color: props.color,
    borderRadius: props.borderRadius,
    background: props.background,
    colorModifier: props.colorModifier,
    backgroundModifier: props.backgroundModifier,
    onClick: props.onClick,
  };

  return (
    <StyledButton data-name="styled-button" {...buttonStyleProps}>
      <span>{props.children}</span>
    </StyledButton>
  );
};

export default memo(Button);
