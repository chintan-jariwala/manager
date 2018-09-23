import React, {Component} from 'react';
import {
    Body,
    Button,
    Container,
    Content,
    Header,
    Left,
    List,
    ListItem,
    Right,
    Text,
    Thumbnail,
    Title
} from "native-base";

class EmployeeList extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Title>Welcome</Title>
                </Header>
                <Content padder>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{uri: 'Image URL'}}/>
                            </Left>
                            <Body>
                            <Text>Sankhadeep</Text>
                            <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

export default EmployeeList;