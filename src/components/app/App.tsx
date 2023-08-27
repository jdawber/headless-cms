import { ReactNode } from "react";
import styled from "styled-components";
import { Sidebar } from "../sidebar";
import type { SidebarProps } from "../sidebar";

const Main = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const Wrapper = styled.div`
  width: 1440px;
`;

const AppWrapper = styled.div`
  display: flex;
`;

type AppProps = {
  children: ReactNode;
  links?: SidebarProps["links"];
};

const App = ({ children, links = [] }: AppProps) => {
  return (
    <AppWrapper>
      <Sidebar links={links} />
      <Main>
        <Wrapper>{children}</Wrapper>
      </Main>
    </AppWrapper>
  );
};

export { App };
