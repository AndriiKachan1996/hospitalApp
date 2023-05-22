import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import {
  ContactItem,
  ContactList,
  Header,
  HeaderWrapp,
  Link,
  Logo,
  Nav,
  NavItem,
} from './SharedLayout.styled';
import { Container } from 'components/common.styled';
import logo from '..//..//picture/logo.png';
import MobileBtn from 'components/MobileBtn/MobileBtn';

const SharedLayout = () => {
  const location = useLocation();

  return (
    <>
      <Header>
        <Container>
          <HeaderWrapp>
            <Logo src={logo} alt="" />
            <Nav>
              <NavItem to="/" state={{ from: location }}>
                Головна
              </NavItem>
              <NavItem to="/team" state={{ from: location }}>
                Наша Команда
              </NavItem>
              <NavItem to="/paid-service" state={{ from: location }}>
                Платні Послуги
              </NavItem>
            </Nav>
            <ContactList>
              <ContactItem>
                <Link
                  href="mailto:knpkor_kodl2@ukr.net"
                  className="contacts-header__link link"
                >
                  {/* <svg className="contacts-header__icon" width="16" height="12">
                    <use href="..//..//picture/icons.svg#icon-envelope"></use>
                  </svg> */}
                  📨 knpkor_kodl2@ukr.net
                </Link>
              </ContactItem>
              <ContactItem>
                <Link
                  href="tel:+38045-63-5-36-74"
                  className="contacts-header__link link"
                >
                  {/* <svg className="contacts-header__icon" width="10" height="16">
                    <use href="..//..//"></use>
                  </svg> */}
                  📱 045-63-5-36-74
                </Link>
              </ContactItem>
            </ContactList>
            {/* <MenuBtn type="buton">MENU</MenuBtn> */}
            <MobileBtn maxHeight={300}></MobileBtn>
          </HeaderWrapp>
        </Container>
      </Header>
      <Suspense fallback={<>Loading...</>}>
        <>
          <Outlet />
        </>
      </Suspense>
    </>
  );
};

export default SharedLayout;
