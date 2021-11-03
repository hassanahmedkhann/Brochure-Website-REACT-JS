import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/services" exact component={Services} />
        <Route path="/contact" exact component={Contact} />
        <Redirect to="/" />
      </Switch>
      <div className="footer"> Copyrights © 2021 Hassan Ahmed Khan</div>
    </>
  );
};

export default App;
