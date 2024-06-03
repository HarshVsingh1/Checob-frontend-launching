
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Launch from './launchingpage'
import Loginpage from './loginpage'
import Registerpage from './registerpage'
import Newin from './newinpage'



function App() {


  return (
    <>
      <Router>
        <Routes>
                <Route path='/' element={<Launch></Launch>} /> 
                <Route path='/login' element={<Loginpage></Loginpage>} /> 
                <Route path='/register' element={<Registerpage></Registerpage>} /> 
                <Route path='/new-in' element={<Newin></Newin>} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App