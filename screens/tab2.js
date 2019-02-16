import React, { Component } from "react";
import {Container, Thumbnail, List, ListItem, Title, Accordion, Content, Button, Icon, Left, Right, Body, Text, Card, CardItem } from "native-base";
import {FlatList, Image, View} from 'react-native';

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

export default class Tab2 extends React.Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;

        this.state = {
            items: [
                {
                    title: 'Ustaz Johari',
                    text: 'Hadis 40',
                    date: '16/02/2019 Sabtu',
                    img_url: '',

                },
                {
                    title: 'Ustaz Kamil',
                    text: 'Tafsir Al-Azkar',
                    date: '17/02/2019 Sabtu',
                    img_url: '',
                }
            ]
        }
    }


    render() {
    return(
        <Container>
            <Content padder>
                <FlatList
                    data={this.state.items}
                    renderItem={({item}) =>

                        <List>
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail source={require('../assets/logo.jpg')} />
                                </Left>
                                <Body>
                                <Text>{item.title}</Text>
                                <Text note>{item.text}</Text>
                                </Body>
                                <Right>
                                    <Text note>{item.date}</Text>
                                </Right>
                            </ListItem>
                        </List>

                    }
                />
            </Content>
        </Container>
    )
  }
}