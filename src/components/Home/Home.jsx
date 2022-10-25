import { useState } from "react"
import { Users } from "../Users/Users"
import { Navbar } from "../Navbar/Navbar"
import { HomeContainer } from "./Home.elements"
import JSONDATA from '../../../db.json'


export function Home() {
  const [searching, setSearching] = useState(false)
  const [filteredUsers, setFilteredUsers] = useState([])

  const totalUsers = JSONDATA

  const handleFilter= (e) => {

    if (e.target.value !== '') {
        setSearching(true)
    } else {
        setSearching(false)
    }

    const filtered = totalUsers.filter((item) => {
        return item.name.toUpperCase().includes(e.target.value.toUpperCase().trim());
    })

    setFilteredUsers(filtered);
}

  return (
    <>      

      <HomeContainer>
        <Navbar handleFilter={handleFilter}/>
        {searching}
        <Users 
          users={searching ? filteredUsers : JSONDATA} 
        />
      </HomeContainer>
    </>
  )
}