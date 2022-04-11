import logo from './logo.svg';
import './App.css';
import { Jumbotron,Button, Container, Row, Col } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import Header from './components/Header';
import Home from './components/Home';
import Item from './components/Item';
import AllItems from './components/AllItems'

import CartHeader from './components/CartHeader';
import CartItem from './components/CartItem';
import {
    BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from './components/login';
import Registration from './components/Registration';
import Address from './components/Address';
import AllRestaurant from './components/AllRestaurant';
import OrderCon from './components/OrderCon';



function App() {

  return (
    <div>
      <Router>
      <ToastContainer/>
     
    <Container>
      <Header/>
          <Routes>

            <Route path="/" element={<Home/>} exact/>
            <Route path="/signup" element={<Registration/>}exact/>
            <Route path="/login" element={<Login/>} exact/>
            <Route path="/address" element={<Address/>}exact/>
           
            <Route path="/allrestaurant" element={ <AllRestaurant />}exact/>
            
            <Route path="cartheader" element={<CartHeader/>}exact/>
            
            <Route path="/allitems" element={<AllItems/>}exact/>
            <Route path="/cartitem" element={<CartItem/>}exact/>
            <Route path="/orderinit" element={<OrderCon/>}exact/>
          
          </Routes>
      
    </Container>
      </Router>
    </div>
  );
}

export default App;
