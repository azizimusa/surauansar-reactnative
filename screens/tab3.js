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
                <Text>Tab 3</Text>
            </Content>
        </Container>
    )
  }
}