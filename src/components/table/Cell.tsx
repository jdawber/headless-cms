import { ReactNode } from "react";
import styled from "styled-components";

type TextAlign = "left" | "center" | "right";

const CellRoot = styled.td<{ $textAlign: TextAlign }>`
  text-align: ${({ $textAlign }) => $textAlign};
  padding: 1rem;
`;

type CellProps = {
  children?: ReactNode;
  textAlign?: TextAlign;
  width?: "string";
};

const Cell = ({ children, textAlign = "left", width }: CellProps) => {
  return (
    <CellRoot as="td" $textAlign={textAlign} width={width}>
      {children}
    </CellRoot>
  );
};

type HeaderCellProps = CellProps;

const HeaderCellRoot = CellRoot;

const HeaderCell = ({ children, textAlign = "left" }: HeaderCellProps) => {
  return (
    <HeaderCellRoot as="th" $textAlign={textAlign}>
      {children}
    </HeaderCellRoot>
  );
};

export { Cell, HeaderCell, CellRoot, HeaderCellRoot };
