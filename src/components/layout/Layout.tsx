import { memo, ReactNode } from 'react';
import {
  LayoutContainer,
  LayoutContent,
  LayoutFooter,
  LayoutHeader,
} from './style';

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  return (
    <LayoutContainer data-name="layout-container">
      <LayoutHeader data-name="layout-header">Header</LayoutHeader>
      <LayoutContent data-name="layout-content">{props.children}</LayoutContent>
      <LayoutFooter data-name="layout-footer">Footer</LayoutFooter>
    </LayoutContainer>
  );
};

export default memo(Layout);
