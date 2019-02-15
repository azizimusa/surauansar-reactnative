import React, { Component } from "react";
import {Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, Card, CardItem } from "native-base";
import {Image, View} from 'react-native';

export default class About extends Component {

  render() {
    return(
        <Container>
            <Header>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                <Title>About</Title>
                </Body>
                <Right/>
            </Header>
            <Content padder>
                <Card>
                    <CardItem header bordered>
                        <Text>Aplikasi Mobile</Text>
                    </CardItem>
                    <CardItem bordered>
                        <Body style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <View>
                            <Image
                                style={{width: 200, height: 150, alignContent: 'center'}}
                                source={require('../assets/logo.jpg')}
                            />
                        </View>
                        <View style={{width: '100%', paddingTop: 10}}>
                            <Text>
                                Aplikasi ini dibangunkan sendiri oleh team AJK Surau Al-Ansar. Bagi tujuan makluman info-info yang berkaitan surau.
                            </Text>
                        </View>
                        </Body>
                    </CardItem>
                    <CardItem footer bordered>
                        <Text>AJK Surau</Text>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
  }
}