import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import AddEvent from './pages/AddEvent'
import ViewEvent from './pages/ViewEvent'
import EventDetails from './pages/EventDetails'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  
  

  return (
    <>
     <Header/>
      <Routes>
      
        <Route path='/' element={<DashBoard/>}/>
        <Route path='/add-event' element={<AddEvent/>}/>
        <Route path='/view-event' element={<ViewEvent/>}/>
        <Route path='/event-details' element={<EventDetails/>}/>
       
      </Routes>
       <Footer/>
    </>
  )
}

export default App
