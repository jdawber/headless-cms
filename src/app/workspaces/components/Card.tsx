import styled from "styled-components";

const Root = styled.article`
  display: flex;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;

  &:hover {
    background: #eee;
  }
`;

const Name = styled.h2`
  font-size: 1rem;
`;

type WorkspaceId = string;

type WorkspaceCardProps = {
  id: WorkspaceId;
  name: string;
  onClick?: (id: WorkspaceId) => void;
};

const WorkspaceCard = ({ id, name, onClick }: WorkspaceCardProps) => {
  return (
    <Root
      onClick={() => {
        onClick?.(id);
      }}
    >
      <Name>{name}</Name>
    </Root>
  );
};

export { WorkspaceCard };
