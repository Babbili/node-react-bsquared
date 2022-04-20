import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Intro from './components/Intro'
import Admin from './components/Admin'
import User from './components/User'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
