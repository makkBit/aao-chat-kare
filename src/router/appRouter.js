import React, { Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./routes";

const LoginPage = lazy(() => import(/* webpackChunkName: "login" */ "view/loginPage"));
const HomePage = lazy(() => import(/* webpackChunkName: "home" */"view/homePage/"));

const RootRouter = (props) => {
    return (
        <Suspense fallback={<div className="loader-div"></div>}>
            <Switch>
                <PublicRoute exact path="/" component={LoginPage} />
                <PrivateRoute exact path="/home" component={HomePage} />
            </Switch>
        </Suspense>
    );
}

export default RootRouter;