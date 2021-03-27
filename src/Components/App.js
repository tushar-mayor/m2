import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import SmartPhone from "./SmartPhone";
import Tablet from "./Tablet";
import Laptop from "./Laptop";
import ScrollToTop from "./ScrollToTop";
import Electronics from "./Electronics";
import Console from "./Console";
import Computer from "./Computer";
import OurServices from "./OurServices";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/Contact" component={Contact}></Route>
        <Route path="/SmartPhone" component={SmartPhone}></Route>
        <Route path="/Tablet" component={Tablet}></Route>
        <Route path="/Laptop" component={Laptop}></Route>
        <Route path="/Electronics" component={Electronics}></Route>
        <Route path="/Console" component={Console}></Route>
        <Route path="/Computer" component={Computer}></Route>
        <Route path="/Services" component={OurServices}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
