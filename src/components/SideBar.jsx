import React from "react";
import { Button, Stack } from "@mui/material";
import { categories } from "../utils/constants";

const selectedCategory = 'New';

const SideBar = () => (
  
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { xs: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <Button
        variant="contained"
        sx={{
          textTransform:'none',
          display:'flex',
          alignItems:'center',
          justifyContent:'flex-start',
          color: "white",
          background: category.name === selectedCategory ? '#FC1503' : 'transparent',
          borderRadius: 50,
          '&:hover':{backgroundColor:'#FC1503'},
          my:1    
        }}
        key = {category.name}
      >
        <span style={{color:category.name === selectedCategory ? 'white' : 'red',marginRight:'10px'}}>{category.icon}</span>
        <span style={{opacity:category.name === selectedCategory ? '1' : '0.8'}}>{category.name}</span>
      </Button>
    ))}
  </Stack>
);

export default SideBar;
