import { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import LoadingScreen from "./pages/LoadingScreen";
import { HomePage } from "./pages/HomePage";
import { ListPage } from "./pages/ListPage";
import { CalendarPage } from "./pages/CalendarPage";
import { ActivityPage } from "./pages/ActivityPage";
import { MoodSelector } from "./pages/MoodSelectorPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
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
        <Route exact path="/calendar">
          <CalendarPage />
        </Route>
        <Route exact path="/activity">
          <ActivityPage />
        </Route>
        <Route exact path="/mood/:mood">
          <MoodSelector />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
