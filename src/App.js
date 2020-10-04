import React from 'react';
//import logo from './logo.svg';
import Heading from "./components/layout/Heading";
import HomeContent from "./components/home/HomeContent";
import Layout from "./components/layout/Layout";
//import NewsList from "./components/newslist/NewsList";
import "./sass/style.scss";

function App() {
  return (
    <Layout>
      <div className="App">
        <Heading title="Title from prop" />
        <HomeContent>This will be the children prop inside the component.</HomeContent>
      </div>
    </Layout>
  );
}

export default App;
