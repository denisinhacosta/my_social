import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { Button, SearchBar, SearchButton } from '../../globalStyles';

import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  NavIcon, 
  HomeIcon,
  FriendsIcon,
  MobileIcon,
  SearchIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemInput,
  NavItemBtn,
  NavBtnLink
} from './Navbar.elements';

export function Navbar ({ handleFilter }) {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [isActive, setIsActive] = useState(false)
  


  const handleClick = () => setClick(!click)

  const toggleSearch = () => {
    setIsActive(!isActive)
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  return (
    <>
    <IconContext.Provider value={{ color: '#FFF' }}>
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon />
          MySocial
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          
        <NavItem>
          <NavItemInput isSearching={isActive} onChange={handleFilter}>
            <SearchButton onClick={toggleSearch}>
              {isActive ?(
                <AiOutlineClose size={18}/>
              ) : (
                <AiOutlineSearch size={22}/>
              )}
              
            </SearchButton>
            <SearchBar />
          </NavItemInput>
          </NavItem>

          <NavItem>
            <NavLinks to='/'>
              <HomeIcon />
            </NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to='/pacientes'>
              <FriendsIcon />
            </NavLinks>
          </NavItem>

          <NavItemBtn>
            {button ? (
              <NavBtnLink to="/sign-up">
                <Button primary>Sign Up</Button>
              </NavBtnLink>
            ) : (
              <NavBtnLink to="/sign-up">
                <Button fontBig primary>
                  Sign Up
                </Button>
              </NavBtnLink>
            )}
          </NavItemBtn>

          
        </NavMenu>
      </NavbarContainer>
    </Nav>
    </IconContext.Provider>
    
    </>
  )
}

