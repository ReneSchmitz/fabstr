import { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import LoadingScreen from "./pages/LoadingScreen";
import { HomePage } from "./pages/HomePage";
import { ListPage } from "./pages/ListPage";
import { CalendarPage } from "./pages/CalendarPage";
import { MoodPage } from "./pages/MoodPage";
import { HappyPage } from "./pages/HappyPage";
import { SadPage } from "./pages/SadPage";

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
        <Route exact path="/calendar">
          <CalendarPage />
        </Route>
        <Route exact path="/mood">
          <MoodPage />
        </Route>
        <Route exact path="/happy">
          <HappyPage />
        </Route>
        <Route exact path="/sad">
          <SadPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
