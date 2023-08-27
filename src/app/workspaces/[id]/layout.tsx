"use client";

import { ReactNode } from "react";
import { App } from "@/components/app";

type LayoutProps = {
  children: ReactNode;
  params: {
    id: string;
  };
};

const Layout = ({ children, params: { id } }: LayoutProps) => {
  console.log(id);

  return (
    <App
      links={[
        {
          id: "dashboard",
          text: "Dashboard",
          link: `/workspaces/${id}/dashboard`,
        },
        {
          id: "pages",
          text: "Pages",
          link: `/workspaces/${id}/pages`,
        },
      ]}
    >
      {children}
    </App>
  );
};

export default Layout;
