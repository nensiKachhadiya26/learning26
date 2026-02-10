import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ContentComponent from './components/ContentComponents'
import { HeaderComponents } from './components/HeaderComponents'
import { FooterComponents } from './components/FooterComponents'
import { MapDemo5 } from './components/MapDemo5'
import { MapDemo6 } from './components/MapDemo6'
import { MapDemo7 } from './components/MapDemo7'
import { MapDemo8 } from './components/MapDemo8'
import { MapDemo9 } from './components/MapDemo9'
import { MapDemo10 } from './components/MapDemo10'
import { NetflixHome } from './components/NetflixHome'
import { Route, Routes } from 'react-router-dom'
import { NetflixShows } from './components/NetflixShows'
import { NetflixMovie } from './components/NetflixMovie'
import { Navbar } from './components/Navbar'
import { NetflixSeries } from './components/NetflixSeries'
import { NetflixDrama } from './components/NetflixDrama'
import { NetflixPodcast } from './components/NetflixPodcast'
import { HomeComponent } from './components/HomeComponent'
import { ErrorNotFound } from './components/ErrorNotFound'
import { Watch } from './components/Watch'
import { Team } from './components/Team'
import { TeamDetail } from './components/TeamDetail'
import { Show } from './components/Show'
import { FunctionDemo1 } from './components/FunctionDemo1'
import { UseStateDemo1 } from './components/UseStateDemo1'
import { UseStateDemo2 } from './components/UseStateDemo2'
import { UseStateDemo3 } from './components/UseStateDemo3'
import { Employee } from './components/Employee'
import { InputDemo1 } from './components/Input/InputDemo1'
import { CustomerDetail } from './components/Input/CustomerDetail'
import { Product } from './components/Product'

//import './App.css'

function App() {
  

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/netflixhome' element={<NetflixHome />}></Route>
        <Route path='/netflixshows' element={<NetflixShows />}></Route>
        <Route path='/netflixmovie' element={<NetflixMovie />}></Route>
        <Route path='/netflixseries' element={<NetflixSeries/>}></Route>
        <Route path='/netflixdrama' element={<NetflixDrama/>}></Route>
        <Route path='/netflixpodcast' element={<NetflixPodcast/>}></Route>
        <Route path='/' element={<HomeComponent/>}></Route>
        <Route path='/watch/:name' element={<Watch/>}></Route>
        <Route path='/*' element={<ErrorNotFound/>}></Route>
        <Route path='/team' element={<Team/>}></Route>
        <Route path='/teamdetail/:name' element={<TeamDetail/>}></Route>
        <Route path='/show/:name' element={<Show/>}></Route>
        <Route path='/functiondemo1' element={<FunctionDemo1/>}></Route>
        <Route path='/usestatedemo1' element={<UseStateDemo1/>}></Route>
        <Route path='/usestatedemo2' element={<UseStateDemo2/>}></Route>
        <Route path='/usestatedemo3' element={<UseStateDemo3/>}></Route>
        <Route path='/employee' element={<Employee/>}></Route>
        <Route path='/inputdemo1' element={<InputDemo1/>}></Route>
        <Route path='/customerdetail' element={<CustomerDetail/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
      </Routes>
    </div>
  )
}

export default App
