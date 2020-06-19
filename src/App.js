import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import DataArea from "./components/DataArea/DataArea";
import Footer from "./components/Footer/index";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Header />
          <Route exact path="/" component={DataArea} />
          <Route exact path="/employee_directory" component={DataArea} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
