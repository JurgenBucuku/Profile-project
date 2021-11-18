import Friendly from "./friendly";
//import { makeStyles } from '@material-ui/core';
//import { Grid } from "@material-ui/core";
import React, { useState } from 'react';
import { Box } from '@mui/system';


// const useStyles = makeStyles(() => ({
//   grid: {
//     width: '100%',
//     margin: '0px'
//   },
// }));


const listName = ["Jurgen Bucuku", "Enea Aliko", "Endri", "Andi", "Jurgen Bucuku", "Enea Aliko", "Endri", "Andi"]

const Home = () => {
  //const classes = useStyles()

  const [listNames, setListNames] = useState(listName)

  const onSearchName = (value) => {

    if (value !== '') {
      const results = listName.filter((item) => {
        return item.toLowerCase().includes(value.toLowerCase());
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
        <input type='text' placeholder='Search....' onChange={(e) => onSearchName(e.target.value)} />
      </div>
      <flexbox sx={{ flexDirection: 'row', display: 'flex', 
      flexWrap: 'wrap', p: 1, m: 1,
       bgcolor: 'background.paper', maxWidth: 300 }} >

        {listNames.map(item => <Friendly name={item}  />)}
      </flexbox>
    </Box>
  )


  // return (
  //   <div>
  //     <input type='text' placeholder='Search....' onChange={(e) => onSearchName(e.target.value)} />
  //     <Grid container spacing={1} className={classes.grid}>
  //       {listNames.map(item => <Friendly name={item} />)}
  //     </Grid>
  //   </div>
  // )
  //  listNames.map(item => <Friendly label={item}/>))

}

export default Home


// return (
//   <div>
//     <input type='text' placeholder='Search....' onChange={(e) => onSearchName(e.target.value)} />
//     <Grid container spacing={1} className={classes.grid}>
//       {listNames.map(item => <Grid items xs={12} md={3}>
//         <Friendly name={item} />
//       </Grid>)}
//     </Grid>
//   </div>
// )