import React, { Component, Fragment } from 'react';
import { InputGroup, FormControl, Button, Dropdown } from 'react-bootstrap';
import logo from '../../assets/logobig.png';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Header.css';
import { FiUser, FiSettings, FiLogOut, FiBookmark } from "react-icons/fi";

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let dropDownMenu ;
        if(this.props.isAuthenticated){
            dropDownMenu=(
                <Dropdown className="dropdown-btn">
                <Dropdown.Toggle id="dropdown-basic">
                   <FiUser></FiUser>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1"><FiSettings></FiSettings><span>User Setting</span></Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><FiBookmark></FiBookmark><span>My Booking</span></Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3"><FiLogOut></FiLogOut><span>Sign Out</span></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            )
        }
        return (
            <div>
               
                <div className="h-container">
               
                    <div className="h-top">
                        <img className="h-logo" src={logo} />
                        {this.props.isAuthenticated ?<Fragment >{dropDownMenu}</Fragment> : <Link className="signIn-btn" to="/login">Sign In</Link>}
                    </div>
                    <div className="h-content">
                        <h1 className="h-title">It's Time To Travel</h1>
                        <h3 className="h-subtitle">Search Over 100+ Destination Across The Country</h3>
                        <InputGroup size="lg">
                            <InputGroup.Prepend>
                                <Button variant="info"><FaSearch /></Button>
                            </InputGroup.Prepend>
                            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Insert the Destinations" />
                        </InputGroup>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;