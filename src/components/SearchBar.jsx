import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Paper,IconButton, InputBase} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Paper component='form' sx={{flex:'0 1 300px',display:'flex',alignItems:'center',borderRadius:20,border:"1px solid #e3e3e3",px:1,boxShadow:'none',mr:{sm:5}}}>
        <InputBase sx={{ ml: 1, flex: 1 }} inputProps={{style:{padding:6}}} placeholder='Search...'/>
        <IconButton sx={{ p: '10px' }} >
          <SearchIcon />
        </IconButton>
    </Paper>
  )
}

export default SearchBar