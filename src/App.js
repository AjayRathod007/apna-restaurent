import logo from './logo.svg';
import './App.css';
import { Jumbotron,Button, Container, Row, Col } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import Header from './components/Header';
import Home from './components/Home';
import Item from './components/Item';
import AllItems from './components/AllItems'
import AddItem from './components/AddItem';
import Menus from './components/Menus';
import {
    BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from './components/login';
import Registration from './components/Registration';
import Address from './components/Address';
import AllRestaurant from './components/AllRestraurant';




function App() {
  const btnHandle =()=>{
    toast.error("done",{
      position: "top-center",
    });
  };
  return (
    <div>
      <Router>
      <ToastContainer/>
     
    <Container>
      <Header/>
      {/* <Row>
        <Col md={4}>
          { <Menus/> }
        </Col>
        <Col md={8}> */}
          <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Registration/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/address" element={<Address/>}/>
            <Route path="/allrestaurant" element={<AllRestaurant/>}/>
             {/* <Route path="/home" element={<Home/>} />
             <Route path="/add-item" element={<AddItem/>} exact/>
             <Route path="/view-items" element={<AllItems/>} exact/> */}

          </Routes>
          
         {/* </Col>
      </Row> */}
    </Container>
      </Router>
    </div>
  );
}

export default App;
