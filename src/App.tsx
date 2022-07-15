import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonLabel,
  IonRouterOutlet,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import List from "./pages/List";
import Settings from "./pages/Settings";
import { useState } from "react";
import Login from "./pages/Login";

setupIonicReact();

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <IonApp>
      {isLogin ? (
        <IonReactRouter>
          <IonTabs>
            <IonTabBar slot={"bottom"}>
              <IonTabButton tab="home" href="/home">
                <IonLabel>HOME</IonLabel>
              </IonTabButton>
              <IonTabButton tab="list" href="/list">
                <IonLabel>TODO</IonLabel>
              </IonTabButton>
              <IonTabButton tab="settings" href="/settings">
                <IonLabel>settings</IonLabel>
              </IonTabButton>
            </IonTabBar>
            <IonRouterOutlet>
              <Route exact path="/list" component={List} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/settings" component={Settings} />
              <Redirect exact from={"/"} to={"/home"} />
            </IonRouterOutlet>
          </IonTabs>
        </IonReactRouter>
      ) : (
        <IonReactRouter>
          <Route exact path="/home" component={Login} />
          <Redirect exact from={"/"} to={"/home"} />
        </IonReactRouter>
      )}
    </IonApp>
  );
};

export default App;
