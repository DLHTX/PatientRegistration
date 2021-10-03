/*
 * @Author: your name
 * @Date: 2021-10-02 20:47:14
 * @LastEditTime: 2021-10-03 10:15:50
 * @LastEditors: DLHTX
 * @Description: In User Settings Edit
 * @FilePath: \Patient Registration\fontend\src\pages\App.tsx
 */
import React, { lazy, Suspense } from 'react'
import ROUTES from '../router/index'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import TemplateStore from "../store/templateStore";
import { Provider } from "mobx-react";
import Patient from './Patient';

const Home = lazy(() => import('./Home'))
const Admin = lazy(() => import('../pages/Admin/index'))


const rootStore = {
    templateStore: new TemplateStore(),
};

const App: React.FC = (props: any) => {
    return (
        <Provider {...rootStore}>
            <BrowserRouter>
                <Suspense fallback={null}>
                    <Switch>
                        <Route path={ROUTES.ADMIN} component={Admin} />
                        <Route path={ROUTES.PATIENT} component={Patient} />
                        <Route path={ROUTES.ROOT} component={Home} />
                        <Redirect from={ROUTES.ROOT} to={ROUTES.DEFAULT_ROUTE} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </Provider>

    )
}


export default App
