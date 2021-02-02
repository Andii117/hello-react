import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Badge from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import Layout from '../components/Layout';
import NotFound from '../pages/NotFound';

function Apps(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badge} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default Apps;