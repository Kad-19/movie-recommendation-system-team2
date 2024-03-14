import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './HomePage'
import SingleMoviePage from './SingleMoviePage'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'


const AllRouting = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/movie' element={<SingleMoviePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='*' element={<div>No page found</div>}/>
        </Routes>
    </div>
  )
}

export default AllRouting