import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const AddCustomerForm = () => {

    return (
        <Form>
            
            <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAddress1">
                <Form.Label>Address 1</Form.Label>
                <Form.Control type="text" placeholder="Enter Address  1" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control type="text" placeholder="Enter Address  2" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAddressCity">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter City" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAddressState">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="Enter State" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAddressPincode">
                <Form.Label>Pincode</Form.Label>
                <Form.Control type="text" placeholder="Enter Pincode" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAddressPincode">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter Pincode" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAddressPincode">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Pincode" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add Customer
            </Button>
            &nbsp;
            <Button variant="secondary" type="submit">
                Reset Customer
            </Button>

        </Form>
    );


}
export default AddCustomerForm;