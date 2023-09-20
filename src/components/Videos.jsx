import React from 'react';
import {TextField,Stack,Box} from '@mui/material';
import {VideoCard,ChannelCard} from './';


const Videos = ({videos}) => {
  console.log('videos',videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {!item.id.channelId && <ChannelCard channelDetail={item} />}
          {item.id.videoId && <VideoCard video={item} /> }
        </Box>
      ))}
    </Stack>
  )
}

export default Videos