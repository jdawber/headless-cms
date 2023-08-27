"use client";

import { useState } from "react";
import { PageHeader } from "@/components/page";
import { Table, THead, TBody, Row, HeaderCell, Cell } from "@/components/table";

type PageType = {
  id: string;
  type: "page" | "folder";
  name: string;
};

const Pages = () => {
  const [pages, setPages] = useState<PageType[]>([]);

  const createNewPage = () => {
    setPages([
      ...pages,
      {
        id: `page-${pages.length + 1}`,
        type: "page",
        name: `Page ${pages.length + 1}`,
      },
    ]);
  };

  const createNewFolder = () => {
    setPages([
      ...pages,
      {
        id: `folder-${pages.length + 1}`,
        type: "folder",
        name: `Folder ${pages.length + 1}`,
      },
    ]);
  };

  console.log(pages);

  return (
    <>
      <PageHeader
        actions={[
          {
            id: "addPage",
            text: "Create page",
            onClick: createNewPage,
          },
          {
            id: "addFolder",
            text: "Create folder",
            onClick: createNewFolder,
          },
        ]}
      >
        Pages
      </PageHeader>
      <Table>
        <THead>
          <Row>
            <HeaderCell>Name</HeaderCell>
          </Row>
        </THead>
        <TBody>
          {pages.map(({ id, type, name }) => (
            <Row key={id}>
              <Cell>{name}</Cell>
            </Row>
          ))}
        </TBody>
      </Table>
    </>
  );
};

export default Pages;
