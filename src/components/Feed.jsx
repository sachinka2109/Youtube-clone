import React,{useState,useEffect} from 'react'
import {Box,Stack,Typography} from '@mui/material'
import {SideBar,Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
  const [selectedCategory,setSelectedCategory] = useState('New');
  const [videos,setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data)=> setVideos(data.items))
      .catch((err) => console.log(err));
  },[selectedCategory]);  

  return (
    <Stack sx={{flexDirection:{xs:"column",md:"row",backgroundColor:'black',color:'white'}}}>
      <Box sx={{height:{xs:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{xs:0,md:2}}}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography className="copyright" variant="body1" color="initial" sx={{ mt: 1.5, color: "#fff" }}>
          copyright 2022 JSM Media
        </Typography>
      </Box>
      <Box sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant="h4" color="initial" fontWeight='bold' mb={2} sx={{color:'white'}}>
          {selectedCategory}<span style={{color:'#F31503'}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed;