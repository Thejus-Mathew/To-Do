import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import AllTodo from './Pages/AllTodo'
import Completed from './Pages/Completed'
import Pending from './Pages/Pending'
import Search from './Pages/Search'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route element={<AllTodo/>} path='/'/>
      <Route element={<Completed/>} path='completed'/>
      <Route element={<Pending/>} path='pending'/>
      <Route element={<Search/>} path='search'/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
