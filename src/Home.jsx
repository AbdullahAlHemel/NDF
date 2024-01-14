import React from 'react';
import About from './Components/About/About';
import Aggregator from './Components/Aggregator/Aggregator';
import Banner from './Components/Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Aggregator></Aggregator>
        </div>
    );
};

export default Home;