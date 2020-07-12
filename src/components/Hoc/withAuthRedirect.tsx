import React from 'react';
import {Redirect} from "react-router";
import Messages from "../Messages/Messages";


export const AuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<{}, {}> {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to={'/login'}/>
            }
            return <Component {...props}/>
        }
    }

    return RedirectComponent
}
