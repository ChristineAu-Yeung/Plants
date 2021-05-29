import {Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Avatar } from '@material-ui/core';
import React, {useState} from 'react';
import { Router, Route, Switch } from "react-router";
import kai from './images/kai.jpg'

function NavBar({setSearchCriteria}) { 

    function search(name) {
        // console.log(searchName);
        // console.log("here", (name && typeof(name) === "string"))
        setSearchCriteria(name !== undefined && typeof(name) === "string" ? name: searchName); 
    }

    function update(e) {
        console.log(e)
        setSearchName(e.target.value);
        // console.log(e.target.value)
        if (e.target.value.length < 1) search("")
    }

    let [searchName, setSearchName] = useState("")
    // type and function return 
    // let [a,b] = [0,1]
    // console.log({a,b})

    const [temp, setTemp] = useState("")

    function logButtonName(e) {
        console.log(e.target.text);
    }

    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">myPlants</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">All Plants</Nav.Link>
            <NavDropdown title="Types" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Ficus" onClick={logButtonName}>Ficus</NavDropdown.Item>
                <NavDropdown.Item href="/Philodendron" onClick={logButtonName}>Philodendron</NavDropdown.Item>
                <NavDropdown.Item href="/Fern" onClick={logButtonName}>Fern</NavDropdown.Item>
                <NavDropdown.Item href="/Succulent" onClick={logButtonName}>Succulent</NavDropdown.Item>
                <NavDropdown.Item href="/Pothos" onClick={logButtonName}>Pothos</NavDropdown.Item>
                <NavDropdown.Item href="/Strelitzia" onClick={logButtonName}>Strelitzia</NavDropdown.Item>
                <NavDropdown.Item href="/Alocasia" onClick={logButtonName}>Alocasia</NavDropdown.Item>
                <NavDropdown.Item href="/Sansevieria" onClick={logButtonName}>Sansevieria </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/All">All</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Avatar className="avatar" alt="profileImage" src={kai} />
            <Form inline>
            <FormControl type="text" placeholder="Search" value={searchName} onChange={(e) => {update(e)}} className="mr-sm-2" />
            <Button variant="outline-success" onClick={search}>Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;