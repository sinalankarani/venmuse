import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./routes/";
import EventsCard from "../ui/components/EventsCard";


const App = () => {
  return (
  <div className="container">
  <React.Fragment>
    <h1>VenMuse</h1>
      <Router>
        <Routes />
      </Router>
    <EventsCard />
  </React.Fragment>
</div>
  )
};

export default App;
