import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import HeaderComponent from "./header";
import TopComponent from './top'
import CountComponent from '../containers/counter'
import FooterComponent from "./footer";

export default class Index extends React.Component {
    render() {
        return (
            <Provider store={ this.props.store }>
                <Fragment>
                    <HeaderComponent/>
                    <BrowserRouter>
                        <Fragment>
                            <Route exact path='/' component={ TopComponent }/>
                            <Route exact path='/counter' component={ CountComponent }/>
                        </Fragment>
                    </BrowserRouter>
                    <FooterComponent/>
                </Fragment>
            </Provider>
        );
    }
}
