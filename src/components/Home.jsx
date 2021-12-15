import React from 'react';
import AboutMe from './AboutMe';

import Banner from './Banner';
import Footer from './Footer';
import Menu from './Menu';

const Home = () => {
    return (
        <>
            <Menu />
            <Banner />
            <AboutMe />
            {/* <Footer /> */}
        </>
    );
}
 
export default Home;