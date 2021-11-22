import Friendly from "./friendly";
import React, { useState } from 'react';
import { Box } from '@mui/system';
import FriendsData from "./Data.json";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

const listName = FriendsData

const Home = () => {

  const [listNames] = useState(listName)
  const [wordEntered, setWordEntered] = useState("");
  const [listFilter, setListFilter] = useState(listNames);

  const onSearchName = (value) => {
    
    setWordEntered(value)
    
    if (value !== '') {
      const results = listFilter.filter((item) => {

        return item.name.toLowerCase().includes(value.toLowerCase());
      });
      //console.log(results)

      setListFilter(results);
    }
    else {
      setListFilter(listFilter)
    }
  }

  const clearInput = () => {
    setListFilter(listNames)
    setWordEntered("");
  };

  // addFriend(e){
  //   e.preventDefault();

  // }

  const handleDelete = (id) => {
    console.log(id)

    const newList = listFilter.filter(item => item.id !== id);
    console.log(newList)

    setListFilter(newList)
  }

  return (
    <Box>
      <div>
        <button className="btn-add">Add Friend</button>
        <input type='text' placeholder='Search....' value={wordEntered} onChange={(e) => onSearchName(e.target.value)} />
        {listFilter.length === 0 ? (
          <SearchIcon />
        ) : (
          <CloseIcon id="clearBtn" onClick={clearInput} />
        )}
      </div>
      {listFilter.map(item => <Friendly key={item.id}
        name={item.name}
        img={item.img}
        deleteClick={() => handleDelete(item.id)} />
      )}
    </Box>
  )
}

export default Home
