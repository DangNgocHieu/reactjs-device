import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
const routes = [
    {
        path: '/home',
        exact : true,
        main: ({history}) => <Home history={history}/>
    },
    {
        path: '/login',
        exact : false,
        main: ({history}) => <Login history={history}/>
    },
];

export default routes;