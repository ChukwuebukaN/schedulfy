import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateSchedule from './pages/CreateSchedule';

export default function Routes(){
    return (
        <div>
            <Route path='/HomePage' component={HomePage} />
            <Route path='/CreateSchedule' component={CreateSchedule} />
        </div>
    );
}