import React, {Component} from 'react';
import {Body, Button, Card, CardItem, Content, Form, Input, Item, Label, Text} from 'native-base';
import {connect} from 'react-redux';
import {emailChanged} from '../actions'

class LoginForm extends Component {

    onLoginPress() {

    }

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    render() {
        return (
            <Content padder>
                <Form>
                    <Item floatingLabel>
                        <Label>Username / Email</Label>
                        <Input
                            onChangeText={this.onEmailChange.bind(this)}
                            autoCorrect={false}
                        />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input
                            secureTextEntry
                            autoCorrect={false}/>
                    </Item>
                    <Card transparent>
                        <CardItem>
                            <Body>
                            <Button block primary
                                    onPress={this.onLoginPress.bind(this)}
                            >
                                <Text> LOGIN </Text>
                            </Button>
                            </Body>
                        </CardItem>
                    </Card>
                </Form>
            </Content>
        );
    }
}

export default connect(null, emailChanged)(LoginForm);
