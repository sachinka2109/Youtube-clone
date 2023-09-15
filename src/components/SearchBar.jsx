import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Paper,IconButton, TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Paper component='form' sx={{borderRadius:20,border:"1px solid #e3e3e3",px:1,boxShadow:'none',mr:{sm:5}}}>
        <TextField
          id="search"
          inputProps={{style:{padding:5,border:'none',borderColor:'white'}}}
          placeholder='search...'
        />
        <IconButton >
          <SearchIcon />
        </IconButton>
    </Paper>
  )
}

export default SearchBar