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

  // addFriend(e){
  //   e.preventDefault();

  // }

  const handleDelete = (id) => {
    const newList = listName.filter(item => item.id !== id);
    setListNames(newList)
  }
 
  return (
    <Box>
      <div>
      <button className="btn-add">Add Friend</button>
        <input type='text' placeholder='Search....' value={wordEntered} onChange={(e) => onSearchName(e.target.value)} />
        {listNames.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}

          
      </div>
      

        {listNames.map(item => ( <div key={item.id}><Friendly key={item.id} name={item.name} img={item.img}  />
        <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
        ))}
      
    </Box>
  )

}

export default Home
