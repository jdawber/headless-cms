import { ReactElement } from "react";
import styled from "styled-components";
import { Row, RowRoot } from "./Row";
import { CellRoot } from "./Cell";

const TableRoot = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;

  tbody ${RowRoot}:hover ${CellRoot} {
    background: #fafafa;
  }
`;

type TableProps = {
  children?:
    | ReactElement<typeof Row | typeof THead | typeof TBody>
    | ReactElement<typeof Row | typeof THead | typeof TBody>[];
};

const Table = ({ children }: TableProps) => {
  return <TableRoot>{children}</TableRoot>;
};

type TableHeadProps = {
  children?: ReactElement<typeof Row> | ReactElement<typeof Row>[];
};

const THead = ({ children }: TableHeadProps) => {
  return <thead>{children}</thead>;
};

type TableBodyProps = TableHeadProps;

const TBody = ({ children }: TableBodyProps) => {
  return <tbody>{children}</tbody>;
};

export { Table, THead, TBody };
