import Friendly from "./friendly";
import React, { useState } from 'react';
import { Box } from '@mui/system';
import FriendsData from "./Data.json";


const listName = FriendsData

const Home = () => {

  console.log(listName)
  const [listNames, setListNames] = useState(listName)
  //const [wordEntered, setWordEntered] = useState("");

  const onSearchName = (value) => {

    if (value !== '') {
      const results = listName.filter((item) => {
        return item.name.toLowerCase().includes(value.toLowerCase());
      });
      setListNames(results);
    }
    else {
      setListNames(listName)
    }
  }

 
  return (
    <Box>
      <div>
        <input type='text' placeholder='Search....'  onChange={(e) => onSearchName(e.target.value)} />

      </div>
      <flexbox sx={{ flexDirection: 'row', display: 'flex', 
      flexWrap: 'wrap', p: 1, m: 1,
       bgcolor: 'background.paper', maxWidth: 300 }} >

        {listNames.map(item => <Friendly key={item.id} name={item.name} img={item.img}  />)}
      </flexbox>
    </Box>
  )

}

export default Home
