import { useContext, useState} from 'react'
import './App.css'
import Navbar from '../components/Navbar';
import DarkModeToggle from '../hooks/DarkModeToggle';

function App() {

  return (
    <>      
        <div className={`h-screen `}>
          <h1>my app</h1>
          <div>
            <a href="https://www.b-r.io/blog/hines">brio</a>
          </div>
          
        </div>


    </>
  )
}

export default App
