import styled from 'styled-components';


export const UsersContainer = styled.div`  
  padding: 2rem;
  height: auto;   
  display: grid;
  width: 100vw;  
  justify-content: space-around;  
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  justify-content: space-evenly;
  gap: 2rem;  
`

export const UserCard = styled.div`
  font-family: 'Roboto', sans-serif;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;  
  font-size: 12px;
  font-weight: 200;
  line-height: 1.8;
  text-align: left;  
  align-items: flex-start;  
  background: var(--gray-300);
  width: 230px;
  height: 250px;
  border-radius: 5px; 
  word-wrap: inherit; 
  color: var(--gray-600);   
  @media screen and (max-width: 960px) {
    width: 100%;
  }

  p {
    width: 100%;
    border-bottom: 1px solid var(--gray-400);
  }
`

export const CardHeader = styled.div`
  display: flex;  
  justify-content: baseline;
  gap: 5px;
  align-items: center;
  width: 100%;
  
  h1 {
    color: var(--gray-600);
    font-size: 14px;
  }
`

export const CardContent = styled.div`  
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  display: flex;
  flex-direction: column;  
  font-size: 12px;
  font-weight: 200;
  line-height: 1.8;
  text-align: left;  
  align-items: flex-start;  
  background: var(--gray-300);
  width: 100%;   
  color: var(--gray-600);   
  @media screen and (max-width: 960px) {
    width: 100%;
  }  

  p {
    width: 100%;
    border-bottom: 1px solid var(--gray-400);
    word-wrap: inherit;
  }
`

export const CardContentHeader = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: flex-end;

  img {
    margin-right: -2px;
    outline: 1px solid white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
  }

`

export const FriendsButton = styled.button`  
  background: none;     
  color: #0467FB;
  border: none;   
  cursor: pointer;   

  &:hover {
    transition: all 0.3s ease-out;
    color: #4B59F7;
  }
  
`

export const ImgCard = styled.img`
  margin: -20px 0 0 -5px;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;  
`