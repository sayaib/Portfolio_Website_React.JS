import './App.css';
import Manu from './webpage_component/Manu';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './webpage_component/Home'
import Codes from './webpage_component/Codes'
import Portfolio from './webpage_component/Portfolio'
import Contact from './webpage_component/Contact'

function App() {
  return (
    <>

      <BrowserRouter>
        <Manu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={Codes} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
