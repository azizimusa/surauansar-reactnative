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
                    title: 'Ust. Syazwan Jaafar',
                    text: 'Malaikat, Jin & Syaitan',
                    date: '17/02/2019 Ahad',
                    img_url: '',

                },
                {
                    title: 'Ust. Mohamad Zahidi',
                    text: 'Penawar Bagi Hati',
                    date: '18/02/2019 Isnin',
                    img_url: '',
                },
                {
                    title: 'Ust. Kptn (B) Mohd. Asri',
                    text: 'Syurga & Neraka',
                    date: '19/02/2019 Selasa',
                    img_url: '',
                },
                {
                    title: 'Ust. Ramli Abu Bakar',
                    text: 'Tafsir Quran (Al-Baqarah)',
                    date: '20/02/2019 Rabu',
                    img_url: '',
                },
                {
                    title: 'Bacaan Surah Yasin',
                    text: 'Tahlil',
                    date: '21/02/2019 Khamis',
                    img_url: '',
                },
                {
                    title: 'Ust. Shuhaimi Abdullah',
                    text: 'Akidah Ahli Sunnah Waljamaah',
                    date: '22/02/2019 Jumaat',
                    img_url: '',
                },
                {
                    title: 'Ust. Amir Al-Hafiz',
                    text: 'Kisah Anbiysa (Sirah)',
                    date: '23/02/2019 Sabtu (Subuh)',
                    img_url: '',
                },
                {
                    title: 'Ust. Shafiq Abdullah',
                    text: '40 Hadis Peristiwa Akhir Zaman',
                    date: '24/02/2019 Ahad',
                    img_url: '',
                },
                {
                    title: 'Ust. Ahmad Rizam',
                    text: 'Munyatul Mussalli',
                    date: '25/02/2019 Isnin',
                    img_url: '',
                },
                {
                    title: 'Ust. Halim Zakaria',
                    text: 'Halal & Haram Semasa',
                    date: '26/02/2019 Selasa',
                    img_url: '',
                },
                {
                    title: 'Ust. Abd Hadi Halim',
                    text: 'Riyadhus Shalihin',
                    date: '27/02/2019 Rabu',
                    img_url: '',
                },
                {
                    title: 'Bacaan Surah Yasin',
                    text: 'Tahlil',
                    date: '28/02/2019 Khamis',
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