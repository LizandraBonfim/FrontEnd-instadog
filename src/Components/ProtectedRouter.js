import React from 'react'
import { Route, Navigate } from 'react-router-dom';
import { UserContext } from '../UserStorage'

function ProtectedRouter(props) {

    const { data } = React.useContext(UserContext);

    if (data) return <Route {...props} />
    else if (!data === false) return <Navigate to="/login" />
    else return null;
}

export default ProtectedRouter;
