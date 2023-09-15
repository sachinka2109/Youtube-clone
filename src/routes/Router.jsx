import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed } from '../components'

export const Router = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' exact element={<Feed />}></Route>
            <Route path='/video/:id' exact element={<VideoDetail />}></Route>
            <Route path='/channel/:id' exact element={<ChannelDetail />}></Route>
            <Route path='/search/:searchTerm' exact element={<SearchFeed />}></Route>
        </Routes>
    </BrowserRouter>
  )
}
