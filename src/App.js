
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Login from "./Login/Login";
import { Home } from './components/Home';
import Cart from './components/Cart';
import { CartState } from './Context/Context';

function App() {
   const {authState:{
    isLoggedIn
   }}= CartState();

  return (
    <div>
      <BrowserRouter>
      {!isLoggedIn ? 
      (<Login />)
      :
     ( 
      <>
     <Header />
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/cart' exact element={<Cart />}/>
      </Routes>
      </>
      )
      }
      </BrowserRouter>
    </div>
  );
}

export default App;
