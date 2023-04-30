import { useState } from 'react';
import styles from './Header.module.scss';
import Logo from '../Logo';
import BurgerButton from '../BurgerButton';
import { NavList, NavItem } from '../Nav';

const Header = () => {
  const {header} = styles;

  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen(!isOpen);
  }

  return (
    <header className={header}>
      <Logo />
      <BurgerButton onClick={toggleNav} isOpen={isOpen}/>
      <NavList isOpen={isOpen}>
        <NavItem>EXERCISES</NavItem>
        <NavItem>TRAINERS</NavItem>
        <NavItem>PRICING</NavItem>
        <NavItem>LOGIN</NavItem>
      </NavList>
    </header>
  )
}

export default Header