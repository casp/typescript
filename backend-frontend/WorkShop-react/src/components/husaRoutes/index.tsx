import React from 'react';
import { Switch, Route } from "react-router-dom";
import { UsersList } from '../../pages/users';
import { UserAdd } from '../../pages/users';
import { UserUpdate} from '../../pages/users';
import { PostsList } from '../../pages/posts';
import { PostAdd } from '../../pages/posts';
import { PostUpdate } from '../../pages/posts';

export const HusaRoutes = () => {
    return (
        <Switch>
          <Route exact path={["/", "/users"]} component={UsersList} />
          <Route exact path={"/users/add"} component={UserAdd} />
          <Route exact path={"/users/update/:id"} component={UserUpdate} />
          <Route exact path={"/posts"} component={PostsList} />
          <Route exact path={"/posts/add"} component={PostAdd} />
          <Route exact path={"/posts/update/:id"} component={PostUpdate} />
        </Switch> 
    );
}