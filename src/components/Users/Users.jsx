import { useState } from "react";
import { Friends } from "../Friends/Friends";
import { HiDotsCircleHorizontal } from "react-icons/hi";

import { 
  UsersContainer,
  UserCard,
  ImgCard,
  FriendsButton,
  CardContent,
  CardHeader,
  CardContentHeader
} from "./Users.elements";


export function Users({ users }) {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return(
    <>
      <Friends 
        showModal={showModal} 
        setShowModal={setShowModal}                                 
      /> 
      <UsersContainer>     
               
        {users.map((val) => {
          const totalFriends = val.friends          
          const filtered = totalFriends.slice(0,4)      
         
        
          return(            
            <UserCard key={val._id}>  
              <CardHeader>                
                <ImgCard src={val.picture} alt="" />
                <h1>{val.name}</h1>                
              </CardHeader>
              
              <CardContent>
                <CardContentHeader>
                  
                  {filtered.map((item) => {
                    return (
                      <img src={item.picture} key={item._id}/>
                    )
                  })}
                  
                  <FriendsButton onClick={openModal}>                
                    <HiDotsCircleHorizontal size={32}/>          
                  </FriendsButton> 
                </CardContentHeader>
                             
                <p>Age: {val.age}</p>
                <p>Eye color: {val.eyeColor}</p>
                <p>Company: {val.company}</p>
                <p>E-mail: {val.email}</p>
              </CardContent>               
            </UserCard>
          )
        })}
        
      </UsersContainer>
    </>
  )
}