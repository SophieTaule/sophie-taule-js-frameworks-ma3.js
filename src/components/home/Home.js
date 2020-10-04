import React from 'react';
import Heading from "../layout/Heading";
import HomeContent from "./HomeContent";

export function Home() {
    return (
        <div className="Home">
            <Heading title="Home" />
            <HomeContent children="children prop inside the component.">Curabitur rutrum ultrices lacus ac scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus luctus ipsum nisi, </HomeContent>
        </div>
    );
}

export default Home;
