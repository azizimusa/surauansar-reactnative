import React, { Component } from "react";
import {Container,List, ListItem, Header, Title, Content, Button, Icon, Left, Right, Body, Text, Card, CardItem } from "native-base";
import {Image, View, FlatList} from 'react-native';

export default class Tab1 extends React.Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            items : [
                {
                    title: 'Hukum Melakukan Amalan yang Tidak Dilakukan oleh Rasulullah SAW',
                    text: "Daripada Anas RA, beliau berkata: “Tidak ada orang yang lebih dicintai oleh para sahabat selain daripada Rasulullah SAW. Jika mereka melihat baginda (datang), mereka tidak akan bangun kerana mereka tahu bahawa baginda membenci perbuatan tersebut.” (Hadith riwayat at-Tirmizi, No.2754 dan Ahmad, No. 11895, 13132, berkata at-Tirmizi: “Hadith ini hasan sahih gharib.”)",
                    video_url: '',
                    img_url: '',
                    sound_url: ''
                },
                {
                    title: 'Sebaik-baik Infaq Adalah Menafkahi Keluarga',
                    text: "Daripada Thauban RA, beliau berkata; Rasulullah SAW bersabda: \"Sebaik-baik dinar (wang atau harta) yang dinafkahkan seseorang ialah dinar yang dinafkahkan untuk keluarganya, dan dinar yang dinafkahkan untuk ternakan tunggangannya (kenderaan) yang digunakan di jalan Allah dan dinar yang dinafkahkan untuk para sahabatnya yang berjuang di jalan Allah.\" (Hadith riwayat Muslim: 994, at-Tirmizi : 1966, Ibnu Majah : 2760, Ahmad : 21346, 21372, 21416)",
                    video_url: '',
                    img_url: '',
                    sound_url: ''
                },
                {
                    title: 'Jauhi Tiyarah (Firasat Buruk)',
                    text: "Daripada Abdullah bin Mas'ud RA, beliau berkata, Rasulullah SAW bersabda: \"Sesungguhnya tiyarah (firasat buruk) sebahagian daripada amalan syirik dan bukan daripada ajaran kami, akan tetapi Allah SWT akan menghilangkan tiyarah (firasat buruk) itu dengan bertawakal kepada-Nya.\" (Hadith riwayat at-Tirmizi, No: 1614, Abu Dawud, No: 3910, Ibnu Majah, No: 3538, Ahmad, No: 3504, 3957)",
                    video_url: '',
                    img_url: '',
                    sound_url: ''
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

                        <Card>
                            <CardItem header bordered>
                                <Text>{item.title}</Text>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                <Text>
                                    {item.text}
                                </Text>
                                </Body>
                            </CardItem>
                            {/*<CardItem footer bordered>*/}
                                {/*<Text>GeekyAnts</Text>*/}
                            {/*</CardItem>*/}
                        </Card>

                    }
                />
            </Content>
        </Container>
    )
  }
}