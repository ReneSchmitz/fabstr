import { useState, useEffect } from "react";
// import logo from "./assets/icon/fabstr.png";
import { LoadingScreen } from "./pages/";
import { HomePage } from "./pages/";
import { ListPage } from "./pages/";
import { CalenderPage } from "./pages/";
import { MoodPage } from "./pages/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          {loading ? <LoadingScreen /> : <HomePage />}
        </Route>
        <Route exact path="./list">
          <ListPage />
        </Route>
        <Route exact path="./calender">
          <CalenderPage />
        </Route>
        <Route exact path="./mood">
          <MoodPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

//<div className="App">
//            <header className="App-header">
//              <img src={logo} className="App-logo" alt="logo" />
//              <p>Einkaufsliste</p>
//            </header>
//          </div>
