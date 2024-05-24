
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Launch from './launchingpage'



function App() {


  return (
    <>
      <Router>
        <Routes>
                <Route path='/' element={<Launch></Launch>} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App