import './Components/Style/Style.css';
import Header from './Components/Header';
import Home from'./Components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Business from './Components/Category/Business';
import Covid from './Components/Category/Covid';
import Sports from './Components/Category/Sports';
import Technology from './Components/Category/Technology';
import Tourism from './Components/Category/Tourism';
import World from './Components/Category/World';
import Reading from './Components/ReadingPage'

function App() {
  
  
  return (
    <div >
      <Router>
       <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/Reading/:id' element={<Reading/>}/>
            <Route path='/business' element={<Business/>}/>
            <Route path='/covid' element={<Covid/>}/>
            <Route path='/sports' element={<Sports/>}/>
            <Route path='/technology' element={<Technology/>}/>
            <Route path='/tourism' element={<Tourism/>}/>
            <Route path='/world' element={<World/>}/>



            
          </Routes>
    </Router>
 
    </div>
  );
}

export default App;





