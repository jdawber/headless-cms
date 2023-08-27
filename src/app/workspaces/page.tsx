"use client";
import styled from "styled-components";
import { WorkspaceCard } from "./components";
import { useRouter } from "next/navigation";

import { PageHeader } from "@/components/page";
import { App } from "@/components/app";

const WorkspacesContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(4, 1fr);
`;

const Page = () => {
  const router = useRouter();

  const onClick = (id: string) => {
    router.push(`/workspaces/${id}/dashboard`);
  };

  return (
    <App
      links={[
        {
          id: "workspaces",
          text: "Workspaces",
          link: "/workspaces",
        },
        {
          id: "somewhere-else",
          text: "Somewhere else",
          link: "/somewhere",
        },
      ]}
    >
      <PageHeader>Workspaces</PageHeader>
      <WorkspacesContainer>
        <WorkspaceCard id="1" name="Workspace 1" onClick={onClick} />
        <WorkspaceCard id="2" name="Workspace 2" onClick={onClick} />
        <WorkspaceCard id="3" name="Workspace 3" onClick={onClick} />
        <WorkspaceCard id="4" name="Workspace 4" onClick={onClick} />
        <WorkspaceCard id="5" name="Workspace 5" onClick={onClick} />
      </WorkspacesContainer>
    </App>
  );
};

export default Page;
