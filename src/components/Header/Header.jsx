import {
  ContactItem,
  ContactList,
  HeaderEl,
  HeaderWrapp,
  Link,
  Logo,
  Nav,
  NavItem,
} from './Header.styled';
import { Container } from 'components/common.styled';
import logo from '..//..//picture/logo.png';
import MobileBtn from 'components/Header/MobileBtn/MobileBtn';
import { SmartphoneSVG } from 'components/SVGcomponents/SmartphoneSVG';
import { MailSVG } from 'components/SVGcomponents/MailSVG';
import HomePage from 'pages/Home/Home';
import Team from 'pages/Team/Team';
import PaidService from 'pages/PaidService/PaidService';

const Header = () => {
  return (
    <HeaderEl>
      <Container>
        <HeaderWrapp>
          <Logo src={logo} alt="" />
          <Nav>
            <NavItem to="/" element={<HomePage />}>
              Головна
            </NavItem>
            <NavItem to="/team" element={<Team />}>
              Наша Команда
            </NavItem>
            <NavItem to="/paid-service" element={<PaidService />}>
              Платні Послуги
            </NavItem>
          </Nav>
          <ContactList>
            <ContactItem>
              <MailSVG />
              <Link
                href="mailto:knpkor_kodl2@ukr.net"
                className="contacts-header__link link"
              >
                knpkor_kodl2@ukr.net
              </Link>
            </ContactItem>
            <ContactItem>
              <SmartphoneSVG />
              <Link
                href="tel:+38045-63-5-36-74"
                className="contacts-header__link link"
              >
                +38 045-63-5-36-74
              </Link>
            </ContactItem>
          </ContactList>

          <MobileBtn maxHeight={300}></MobileBtn>
        </HeaderWrapp>
      </Container>
    </HeaderEl>
  );
};

export default Header;
