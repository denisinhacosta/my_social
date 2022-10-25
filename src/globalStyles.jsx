import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    :root {
      --pink: #FE3386;
      --white: #FFFFFF;
      --purple: #4B59F7;
      --gray-100: #F8F8F8;
      --gray-300: #c4c4cc;
      --gray-400: #8d8d99;
      --gray-600: #323238;
    }
  }
`

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  -webkit-font-smoothing: antialiased;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`

export const Button = styled.button`
  border-radius: 4px;
  background: ${({primary}) => (primary ? '#4B59F7' : '#0467FB' )};
  white-space: nowrap;
  padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
  color: var(--white);
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: var(--white);
    background: ${({primary}) => (primary ? '#0467FB' : '#4B59F7' )};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const SearchBar = styled.input`  
  padding-left: 32px;
  border: none;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #cb296b;  
  outline: none;
  font-size: 14px;  
  border: 2px solid transparent;
  border-radius: 20px;

`
export const SearchButton = styled.button`
  position: relative;
  height: 26px;
  width: 26px;
  border: none;
  z-index: 1;
  cursor: pointer;
  background: none;

  &:hover {
    color: white;
    &::after {
      opacity: 1;
      transform: scale(1);
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 50%;
    z-index: -1;
    background: #000;
    transition: 0.2s ease;
    transform: scale(0.6);
  }
`
    


export default GlobalStyle