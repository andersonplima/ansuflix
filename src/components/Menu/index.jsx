import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import MenuButton from './components/MenuButton';
import MenuWrapper from './style';
import LogoImage from '../LogoImage';

function Menu() {
  return (
    <MenuWrapper>
      <Link to="/">
        <LogoImage className="Logo" src={Logo} alt="AnsuFlix logo" />
      </Link>
      <MenuButton as={Link} to="/cadastro/video">Novo vídeo</MenuButton>
    </MenuWrapper>
  );
}

export default Menu;
