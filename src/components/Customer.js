import React,{useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
// bootstrap imports
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';
import './Customer.css';
import { ArrowRight, Gear } from 'react-bootstrap-icons';
import AddCustomer from './AddCustomer';

const Customer = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    return (
        <Container fluid>
         <Row className='nav-border-bottom'>
           <Col>
            a
           </Col>
         </Row>
         <Row>
           <Col xs={1} className='nav-border-right'>
            <Nav defaultActiveKey="/" className="flex-column">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/customer">Customer</Nav.Link>
                <Nav.Link href="/creditcard">Credit Cards</Nav.Link>
                <Nav.Link href="/loans">Loans</Nav.Link>
            </Nav>
           </Col>
           {/* Manager Customer Screen*/}
            <Col className='customer-page-bg'>
                <Container fluid>
                    <Row>
                        <Col>
                        <div className='customer-page-bg-top'>
                            <div class="float-start">Customers</div>
                            <div class="float-end">
                                <Breadcrumb>
                                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item> 
                                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">Customer</Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='customer-page-buttons-bg'>
                            <div className='customer-page-buttons-top'>
                                <div class="float-start"> 
                                  <AddCustomer name="Add Customer" placement="end"/>
                                </div>
                                <div class="float-end">
                                    <Button variant="outline-secondary"><Gear></Gear></Button>{' '}
                                    <Button variant="outline-secondary">Export</Button>{' '}
                                    <Button variant="outline-secondary">Import</Button>{' '}
                                </div>
                            </div>
                            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
                        </Col>
                        
                    </Row>
                    
               </Container>
            </Col>
         </Row>
        </Container>
    );
}
export default Customer;