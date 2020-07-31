import React from 'react'
import Logo from '../../assets/images/Logo.png'
import Button from '../Button'
import { MenuWrapper } from './style'
import LogoImage from '../LogoImage'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <MenuWrapper>
      <Link to="/">
        <LogoImage className="Logo" src={Logo} alt="AnsuFlix logo" />
      </Link>
      <Button as={Link} to="/cadastro/video">Novo vídeo</Button>
    </MenuWrapper>
  )
}

export default Menu