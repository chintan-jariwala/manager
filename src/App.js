import React, {Component} from 'react';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {Root} from 'native-base';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducer';
import * as config from './config/firebase-config'
import Navigation from "./navigation";

class App extends Component {

    componentWillMount() {
        console.log(config);
        firebase.initializeApp(config.config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Root>
                <Provider store={store}>
                    <Navigation/>
                </Provider>
            </Root>
        );
    }
}

export default App;