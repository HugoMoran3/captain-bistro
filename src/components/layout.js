import * as React from "react"
import Navbar from "../components/navbar"
import Maps from "../components/maps"
import Contact from "../components/contacts"
import Menu from '../components/menu';
import Gallery from '../components/gallery';

const Layout = ({}) => {
    return (
        <div>
            <Navbar />
            <Gallery />
            <Menu />
            <div className='container p-10 m-5 mx-auto h-300px'>
                <Maps />
            </div>
            <Contact />
        </div>
    );
};

export default Layout