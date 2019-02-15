import React, { Component } from "react";
import {Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, Card, CardItem } from "native-base";
import {Image, View} from 'react-native';

export default class Tab1 extends React.Component {

  render() {
    return(
        <Container>
            <Content padder>
                <Text>Tab 1</Text>
            </Content>
        </Container>
    )
  }
}