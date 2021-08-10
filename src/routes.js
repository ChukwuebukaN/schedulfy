import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateSchedule from './pages/CreateSchedule';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/createschedule' component={CreateSchedule} />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;
