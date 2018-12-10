import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar = () =>
    <nav className="sidebar">
        <Link className="navBtn" to="/">Home</Link>
        <Link className="navBtn" to="/breed-list">Breed list</Link>
        <Link className="navBtn" to="/contacts">Contacts</Link>
    </nav>;

export default SideBar;
