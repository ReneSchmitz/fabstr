import { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { LoadingScreen } from "./pages/LoadingScreen";
import { HomePage } from "./pages/HomePage";
import { ListPage } from "./pages/ListPage";
import { CalenderPage } from "./pages/CalenderPage";
import { MoodPage } from "./pages/MoodPage";

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
        <Route exact path="/list">
          <ListPage />
        </Route>
        <Route exact path="/calender">
          <CalenderPage />
        </Route>
        <Route exact path="/mood">
          <MoodPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
