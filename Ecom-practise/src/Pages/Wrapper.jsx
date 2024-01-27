import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

function Wrapper() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Wrapper