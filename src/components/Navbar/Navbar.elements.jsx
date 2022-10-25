import styled from 'styled-components';
import { UsersThree, House, Users, MagnifyingGlass } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { Container } from '../../globalStyles'

export const Nav = styled.nav `
  background: var(--pink);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;  
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`

export const NavLogo = styled(Link)`
  color: var(--white);
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`

export const NavIcon = styled(UsersThree)`
  margin-right: 0.5rem;
`

export const HomeIcon = styled(House)`
  margin-right: 0.5rem;
  font-size: 1.8rem;
`
export const FriendsIcon = styled(Users)`
  margin-right: 0.5rem;
  font-size: 1.8rem;
`

export const SearchIcon = styled(MagnifyingGlass)`  
  color: #FFF !important; 
`

export const SearchInput = styled.input`  
  background-color: transparent;
  height: 2rem;
  color: white;
  border: none;
  outline: none;
  border-bottom: 2px solid white;
  font-size: 1rem;
  text-align: left;
  
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`


export const NavMenu = styled.div`
  display: flex;
  align-items: center;  
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: var(--pink);
  }
`

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;

  &:hover {    
    border-bottom: 2px solid var(--purple);
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }    
  }
`

export const NavLinks = styled(Link) `
  color: var(--white);
  display: flex;
  align-items: center;
  text-decoration: none;  
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: var(--purple);
      transition: all 0.3s ease;
    }
  }
`

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`

export const NavItemInput = styled.div`  
  text-decoration: none;  
  position: relative;  
  width: ${props => (props.isSearching ? 250 : 30)}px;
  height: 36px;
  border-radius: 4px;
  display: flex;
  align-items: center;  
  justify-content: space-between;
  padding-left: 5px;
  transition: all 0.3s ease;
  @media screen and (max-width: 960px) {
    width: 100%;
  }

`

