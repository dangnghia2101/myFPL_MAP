import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import "./App.css";
import menu from "./data/menu.json";

const Child = ({ info, id, text }) => {
  const location = useLocation();
  const LoadComponent = lazy(() =>
    import(
      /* webpackChunkName: "[request]" */ `./pages${location.pathname}.tsx`
    ).catch(() => import("./components/NotFound.js"))
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
  const callback = useCallback((id, text, info) => {
    setInfo(info);
    setID(id);
    setText(text);
  }, []);

  return (
    <Router>
      <div>
        <main>
          <Suspense fallback={<div></div>}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/image-on-map" />
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
