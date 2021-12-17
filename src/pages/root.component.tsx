import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import People from '@pages/people/people.page';
// import Cars from '@pages/car/car.page';
import { routes } from '@pages/routes';

import Dashboard from '@pages/dashboard/dashboard.page';

const PageRoot: React.FC = () => {

    return (
        <Switch>
            <Route exact path={routes.home.url}>
                <Dashboard />
            </Route>
        </Switch>
    );
}

export default PageRoot;