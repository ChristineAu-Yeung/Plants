import {Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Avatar } from '@material-ui/core';
import React, {useState} from 'react';
import kai from './images/kai.jpg'

function NavBar({setSearchCriteria}) { 

    function search(name) {
        console.log(SearchName);
        console.log("here", (name && typeof(name) === "string"))
        setSearchCriteria(name !== undefined && typeof(name) === "string" ? name: SearchName); 
    }

    function update(e) {
        console.log(e)
        SetSearchName(e.target.value);
        console.log(e.target.value)
        if (e.target.value.length < 1) search("")
    }

    let [SearchName, SetSearchName] = useState("")
    // type and function return 

    // let [a,b] = [0,1]
    // console.log({a,b})

    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">myPlants</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">All Plants</Nav.Link>
            <NavDropdown title="Types" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Ficus</NavDropdown.Item>
                    {/* <div onClick={()=>this.props.handleAction('sync_event')}>
                        
                    </div> */}
                <NavDropdown.Item href="#action/3.2">Philodendron</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Fern</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">IDK YET</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Avatar className="avatar" alt="Christine" src={kai} />
            <Form inline>
            <FormControl type="text" placeholder="Search" value={SearchName} onChange={(e) => {update(e)}} className="mr-sm-2" />
            <Button variant="outline-success" onClick={search}>Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;