import Friendly from "./friendly";
import React, { useState } from 'react';
import { Box } from '@mui/system';
import FriendsData from "./Data.json";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

const listName = FriendsData

const Home = () => {

  console.log(listName)
  const [listNames, setListNames] = useState(listName)
  const [wordEntered, setWordEntered] = useState("");

  const onSearchName = (value) => {

    setWordEntered(value)

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

  const clearInput = () => {
    setListNames(listName)
    setWordEntered("");
  };
 
  return (
    <Box>
      <div>
        <input type='text' placeholder='Search....' value={wordEntered} onChange={(e) => onSearchName(e.target.value)} />
        {listNames.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
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
