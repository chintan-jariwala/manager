import React, {Component} from 'react';
import {
    Body,
    Button,
    Card,
    CardItem,
    Container,
    Content,
    Form,
    Header,
    Input,
    Item,
    Label,
    Spinner,
    Text,
    Title
} from 'native-base';
import {connect} from 'react-redux';
import {emailChanged, loginUser, passwordChanged} from '../actions'

class LoginForm extends Component {

    onLoginPress() {
        const {email, password} = this.props;
        this.props.loginUser({email, password});
    }

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    renderError() {
        if (this.props.error) {
            return (
                <Body>
                <Text>
                    Authentication Failed
                </Text>
                </Body>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return (
                <Button block primary
                        onPress={this.onLoginPress.bind(this)}
                >
                    <Spinner color='white'/>
                </Button>
            );
        }
        return (
            <Button block primary
                    onPress={this.onLoginPress.bind(this)}
            >
                <Text> LOGIN </Text>
            </Button>
        );
    }

    render() {
        return (
            <Container>
                <Header>
                    <Title>Welcome</Title>
                </Header>
                <Content padder>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username / Email</Label>
                            <Input
                                onChangeText={this.onEmailChange.bind(this)}
                                autoCorrect={false}
                                value={this.props.email}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input
                                secureTextEntry
                                onChangeText={this.onPasswordChange.bind(this)}
                                autoCorrect={false}
                                value={this.props.password}/>
                        </Item>
                        {this.renderError()}
                        <Card transparent>
                            <CardItem>
                                <Body>
                                {this.renderButton()}
                                </Body>
                            </CardItem>
                        </Card>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
};
export default connect(mapStateToProps,
    {
        emailChanged,
        passwordChanged,
        loginUser
    })(LoginForm);
