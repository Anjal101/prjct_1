import logo from './logo.svg';
import './App.css';
import View from './components/View';
import Navigation from './components/Navigation';
import { Route, Router, Routes } from 'react-router-dom';
import Add from './components/Add';
import Navbar from './components/Navbar';
function App() {
  return (
    <div  className="App">
       {/* <Basics/> */}
   {/* { <Navigation/> */} 
   {/* <TableArray/> */}
   {/* <ViewData/> */}

   {/* <View/> */}
    {/* <Add/> */}
    <Navbar/> 
    <Routes>
      <Route path="/" element={<View/>}/>
      <Route path="/a" element={<Add data={{sname:'',sgrade:''}} method='post'/>}/>
    </Routes>
   
    </div>
  );
}

export default App;
