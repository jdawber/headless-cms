"use client";

import { ReactNode } from "react";
import styled from "styled-components";
import { Sidebar } from "@/components/sidebar";

const AppWrapper = styled.div`
  display: flex;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const Wrapper = styled.div`
  width: 1440px;
`;

const Layout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
