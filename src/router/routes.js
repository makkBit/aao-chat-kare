import React from "react";
import { Route, Redirect } from "react-router-dom";
import isAuthenticated from "utils/isAuthenticated";

export function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props => {
                return isAuthenticated() ?
                    <Component {...props} /> :
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: props.location }
                        }}
                    />
            }
            }
        />
    );
}

export function PublicRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props => {
                return isAuthenticated() ?
                    <Redirect
                        to={{
                            pathname: "/home",
                            state: { from: props.location }
                        }}
                    /> :
                    <Component {...props} />
            }
            }
        />
    );
}
