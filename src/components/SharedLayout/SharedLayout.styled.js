import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const HeaderWrapp = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  display: flex;
  padding: 30px;
  align-items: center;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const NavItem = styled(NavLink)`
  &:not(:last-child) {
    margin-right: 80px;
  }
  color: #166c65;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: 0.02em;
  font-family: 'Raleway', sans-serif;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #26c0b4;
  }
  &:hover {
    color: #26c0b4;
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: block;
  margin-bottom: -50px;
  border-radius: 50%;
  z-index: 1;

  @media screen and (max-width: 820px) {
    width: 80px;
    height: 80px;
    margin-left: 15px;
  }
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const ContactItem = styled.li`
  font-size: 17px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: 0.02em;
  font-family: 'Raleway', sans-serif;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Link = styled.a`
  color: #166c65;

  &.active {
    color: #26c0b4;
  }
  &:hover {
    color: #26c0b4;
  }
`;

export const MenuBtn = styled.button`
  cursor: pointer;
  margin: 30px;
  background-color: red;
  @media screen and (min-width: 820px) {
    display: none;
  }
`;

export const MainContainer = styled.main``;
