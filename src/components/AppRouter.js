import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { privat_route, pablish_route } from '../route';
import { CATALOG_PATH, LOGIN_PATH } from '../util/const';
import { auth } from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth";

const AppRouter = () => {
    const [user] = useAuthState(auth);
    return(
        user ?
        (
            <Switch>
                {privat_route.map(({path, Component}) => 
                    <Route key = {path} path={path} component = {Component} exact={true} />
                )}
                <Redirect to = {CATALOG_PATH}/>
            </Switch>
        ):
        (
            <Switch>
                {pablish_route.map(({path, Component}) => 
                    <Route key = {path} path={path} component = {Component} exact={true} />
                )}
                <Redirect to = {LOGIN_PATH}/>
            </Switch>
        )
    );
}

export default AppRouter;