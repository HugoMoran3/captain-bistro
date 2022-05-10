import * as React from "react"
import Navbar from "../components/navbar"
import Maps from "../components/maps"
import Contact from "../components/contacts"

const Layout = ({}) => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto h-100px p-100">
                <Maps />
            </div>
            <Contact />
        </div>
    )
}

export default Layout