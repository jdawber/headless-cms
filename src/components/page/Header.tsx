import styled from "styled-components";

const HeaderWrapper = styled.header`
  margin-bottom: 2rem;
  display: flex;
`;

const Title = styled.h1`
  flex: 1;
  font-size: 2rem;
`;

const ActionsWrapper = styled.div``;

const Action = styled.button`
  border: 0;
  border-radius: 0.5rem;
  background: #ff2800;
  padding: 0.5rem;
  cursor: pointer;
  color: #ffffff;
  margin-right: 0.5rem;

  &:hover {
    background: #dd0000;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

type HeaderProps = {
  children: string;
  actions?: {
    id: string;
    text: string;
    onClick: () => void;
  }[];
};

const PageHeader = ({ children, actions = [] }: HeaderProps) => {
  return (
    <HeaderWrapper>
      <Title>{children}</Title>
      {actions.length > 0 && (
        <ActionsWrapper>
          {actions.map(({ id, text, onClick }) => (
            <Action key={id} onClick={onClick}>
              {text}
            </Action>
          ))}
        </ActionsWrapper>
      )}
    </HeaderWrapper>
  );
};

export { PageHeader };
