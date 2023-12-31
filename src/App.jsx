import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from './components/exporter'

const App = () => (
    <BrowserRouter>
        <Box sx={{backgroundColor: '#000'}}>
            <Navbar/>
        </Box>

        <Routes>
            <Route path='/' exact element={<Feed/> }/>
            <Route path='/video/:id' element={<VideoDetail/> }/>
            <Route path='/channel/:id' element={<ChannelDetail/> }/>
            <Route path='/search/:searchTerm' element={<SearchFeed/> }/>
        </Routes>
    </BrowserRouter>
);

export default App