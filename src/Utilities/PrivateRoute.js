import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../services/token-services';

export default function PrivateRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        TokenService.hasAuthToken()
          ? <Component {...componentProps} />
          : <Redirect
            to={{
              pathname: '/signin',
              state: { from: componentProps.location }
            }}
          />
      )}
    />
  )
}