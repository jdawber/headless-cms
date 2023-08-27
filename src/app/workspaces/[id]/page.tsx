"use client";

import { PageHeader } from "@/components/page";

type PageProps = {
  params: {
    id: string;
  };
};

const Page = ({ params }: PageProps) => {
  const { id } = params;

  return (
    <>
      <PageHeader>{`Workspace: ${id}`}</PageHeader>
    </>
  );
};

export default Page;
