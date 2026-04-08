import React, { lazy, Suspense, useState } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";

const MarketingApp = lazy(() => import("./components/MarketingApp"));
const AuthApp = lazy(() => import("./components/AuthApp"));
const DashboardApp = lazy(() => import("./components/DashboardApp"));

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <div>
        <Header
          isSignedIn={isSignedIn}
          onSignOut={() => setIsSignedIn(false)}
        />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/auth">
              <AuthApp onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/dashboard" component={DashboardApp} />
            <Route path="/" component={MarketingApp} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
