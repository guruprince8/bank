// import logo from './logo.svg';
// import './App.css';
//import ExpenseItem from './components/ExpenseItem';
import React,{useState,useEffect} from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route,Switch,Link } from "react-router-dom";
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';
import Layout from './components/Layout';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import About from './components/About';
import Users from './components/Users';
import Customer from './components/Customer';
import CreditCard from './components/CreditCard';
import Loans from './components/Loans';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Favicon from 'react-favicon';

// bootstrap imports
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function App() {
  useEffect(() => {
    document.title = "Trillo - Reservation Management System"
  }, []);
  //const iniexpense=[];
  const dummyexpenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2021,0,28)
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021,1,12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 272.12,
      date: new Date(2021,2,28)
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 194.12,
      date: new Date(2021,3,12)
    }
  ];
  const [expenses,setExpenses] = useState(dummyexpenses);

  const expenseHandler = (expenseData) => {
    //console.log('In app.js');
    //console.log(expenseData);
    setExpenses([expenseData,...expenses]);
  }
  return (
    // <div>
     
    // </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       {/* <Route index element={<Home />} /> */}
    //       <Route path="blogs" element={<Blogs />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="*" element={<NoPage />} />
    //     </Route>
    //   </Routes>
    //   <Switch>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/users">
    //         <Users />
    //       </Route>
    //       <Route path="/">
    //         <Home />
    //       </Route>
    //     </Switch>
    // </BrowserRouter>
    <div>
    <Favicon url='http://oflisback.github.io/react-favicon/img/github.ico' />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="users/*" element={<Users />} />
        <Route path="customer/" element={<Customer />} />
        <Route path="creditcard/*" element={<CreditCard />} />
        <Route path="loans/*" element={<Loans />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      {/* <Router> 
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
     </Router>  */}
    </BrowserRouter>
    </div>
  );
}

export default App;
