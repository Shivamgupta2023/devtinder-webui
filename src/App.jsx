import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter basename='/'>
     <Routes>
      <Route path='/' element={<Body/>}>
       <Route path='/login' element={<Login/>}/>
      </Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
