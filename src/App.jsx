
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'
import { useEffect, useState } from 'react'
import { getCotegory, getProduct } from './services'
import Login from './pages/login/Login'


function App() {
  const [categoryData, setCategoryData] = useState([])
  const [getData, setGetData] = useState([])
  useEffect(() => {
    getCotegory().then((data) => {
      setCategoryData(data);

    })
    getProduct().then((data) => {
      setGetData(data)
      console.log(data);

    })
  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home getData={getData} categoryData={categoryData} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
