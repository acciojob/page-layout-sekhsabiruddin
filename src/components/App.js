import React from "react";
import Header from "./Header";
import Child from "./Child";
import Footer from "./Footer";
import PageLayout from "./PageLayout";

const App = () => {
  return (
    <PageLayout header={<Header />} children={<Child />} footer={<Footer />} />
  );
};

export default App;
