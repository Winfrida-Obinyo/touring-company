import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import Accommodation from '../accommodation';

function Layout () {
    return(
        <div>
            <Navbar />
            <Accommodation />
            <Footer />
        </div>
    );
}

export default Layout;