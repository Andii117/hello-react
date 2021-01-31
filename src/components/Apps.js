import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Badge from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew'

function Apps(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/badges" component={Badge} />
                <Route exact path="/badges/new" component={BadgeNew} />
            </Switch>
        </BrowserRouter>
    );
}

export default Apps;