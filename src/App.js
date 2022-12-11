
import './App.css';
import Blog from './Pages/Blog';

import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        
       

          
        
      </Routes>
     
    
     
    </div>
  );
}

export default App;
