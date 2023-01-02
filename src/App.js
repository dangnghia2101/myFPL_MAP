import { lazy, Suspense, useCallback, useState } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import "./App.css";

const Child = () => {
  const location = useLocation();
  const LoadComponent = lazy(() =>
    import("./pages/mapHcm/MapHcm.tsx").catch(() =>
      import("./components/NotFound.tsx")
    )
  );

  return (
    <>
      <LoadComponent />
    </>
  );
};

function App() {
  const [info, setInfo] = useState("");
  const [id, setID] = useState("");
  const [text, setText] = useState("");

  return (
    <Router>
      <div>
        <main>
          <Suspense fallback={<div></div>}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/MapHcm" />
              </Route>
              <Route
                path="/:id"
                children={<Child id={id} info={info} text={text} />}
              />
            </Switch>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
