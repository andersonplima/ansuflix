import React from 'react';
import { FooterBase } from './styles';
import LogoImage from '../LogoImage'
import Logo from '../../assets/images/Logo.png'

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <LogoImage className="Logo" src={Logo} alt="AnsuFlix logo" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
