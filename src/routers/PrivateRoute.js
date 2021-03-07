import React from 'react';
import { connect } from 'react-redux' //using store to determine auth status
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({isAuthenticated, component: Component, ...rest }) => ( //component: Component é um rename; ...rest é tudo o resto que ficou e vai ser passado para o Route. É fazer pull do isAuthenticated e do component e passar o resto
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/" />
        )
    )}/>  
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid //if exists, isAuthenticated is true
});

export default connect(mapStateToProps)(PrivateRoute);