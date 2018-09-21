import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Container, Content, Header, Root, Title} from 'native-base';
import reducers from './reducer';
import * as config from './config/firebase-config'
import firebase from 'firebase';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Root>
                <Provider store={createStore(reducers)}>
                    <Container>
                        <Header>
                            <Title>Welcome</Title>
                        </Header>
                        <Content>
                        </Content>
                    </Container>
                </Provider>
            </Root>
        );
    }
}

export default App;