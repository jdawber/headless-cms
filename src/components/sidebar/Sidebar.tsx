import type { Metadata } from "next";
import styled from "styled-components";

import { usePathname } from "next/navigation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JD Headless CMS",
  description: "JD Headless CMS",
};

const SidebarRoot = styled.nav`
  width: 300px;
  background: #3c0003;

  height: 100vh;
  color: #ffffff;
  padding: 1rem;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

type ListItemProps = {
  $isActive?: boolean;
};

const ListItem = styled.li<ListItemProps>`
  margin-bottom: 1px;
  background: ${({ $isActive }) => $isActive && "#5A0003"};
  border-radius: ${({ $isActive }) => $isActive && "0.5rem"};

  a {
    padding: 1rem;
    display: block;
  }

  &:hover {
    background: #5a0003;
    border-radius: 0.5rem;
  }
`;

type SidebarProps = {
  links: {
    id: string;
    text: string;
    link: string;
  }[];
};

const Sidebar = ({ links = [] }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <SidebarRoot>
      <List>
        {links.map(({ id, text, link }) => (
          <ListItem $isActive={pathname === link} key={id}>
            <Link href={link}>{text}</Link>
          </ListItem>
        ))}
      </List>
    </SidebarRoot>
  );
};

export { Sidebar };
export type { SidebarProps };
