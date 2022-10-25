import { UserCard, UsersContainer } from "../Users/Users.elements";

import { 
  Background, 
  CloseModalButton, 
  ModalContent,   
  ModalWrapper 
} from "./Friends.elements";

export function Friends({ showModal, setShowModal }) {
  return (
    <>
    {showModal ? (
      <Background>
        <ModalWrapper showModal={showModal}>
          <ModalContent>
            <UsersContainer>
            <UserCard>             
              
              </UserCard>
            </UsersContainer>
          </ModalContent>
          <CloseModalButton 
           aria-label="Close modal" onClick={() => setShowModal (prev => !prev)}
          />
        </ModalWrapper>
      </Background>
    ) : null}
    
    </>
  )
}