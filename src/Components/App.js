import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import SmartPhone from "./SmartPhone";
import OurServices from "./OurServices";
import Iphone from "./Iphone";
import ScrollToTop from "./ScrollToTop";
function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />
                <Route path="/SmartPhone" component={SmartPhone} />
                <Route path="/Iphone" component={Iphone} />
                <Route path="/Services" component={OurServices} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
