import './App.css';
import { Contact } from './Pages/Contact';
import Hompage from './Pages/Hompage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Hompage />} />
          <Route path='/con' element={<Contact />} />
        </Routes>
       
      </Router>
     
     
      
      
      
    </div>
  );
}

export default App;
