import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register  from './components/Register'
import Price from './components/Price';
import Services from './components/Services';
import SearchList from './components/SearchList';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    // <div style={{backgroundColor:"whitesmoke",border:"1px solid black"}}>
      // <Login/>
    // </div>
    
        <Register/>
      // <Price/>

  );
}


export default App;  
 