import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './components/Profile'
import Login from './components/Login'
import Body from './Body'
import { Provider} from 'react-redux'
import mainStore from './reduxStore/mainStore'
import Feed from './components/feed'

function App() {

  return (
    <>
      <Provider store={mainStore}>
        <BrowserRouter basename='/'>
          <Routes>
            <Route path='/' element={<Body />}>
              <Route path='/login' element={<Login />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/feed' element={<Feed/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
