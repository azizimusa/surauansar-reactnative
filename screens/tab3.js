import React from "react";
import {Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, Card, CardItem } from "native-base";

export default class Tab3 extends React.Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }


    render() {
    return(
        <Container>
            <Content padder>
                <Card>
                    <CardItem>
                        <Icon active type="FontAwesome" name="edit" />
                        <Text>Khairat Kematian</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Icon active type="FontAwesome" name="edit" />
                        <Text>Korban 2019</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
  }
}