import { ReactElement } from "react";
import styled from "styled-components";
import { Cell } from "./Cell";

const RowRoot = styled.tr``;

type RowProps = {
  children?: ReactElement<typeof Cell> | ReactElement<typeof Cell>[];
};

const Row = ({ children: cells }: RowProps) => {
  return <RowRoot>{cells}</RowRoot>;
};

type HeaderRowProps = RowProps;

const HeaderRow = ({ children: cells }: HeaderRowProps) => {
  return <tr>{cells}</tr>;
};

export { Row, RowRoot, HeaderRow };
