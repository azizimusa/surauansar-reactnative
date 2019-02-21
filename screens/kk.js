import React, { Component } from "react";
import {Container, Header, Title, Text, Content, Button, Icon, Left, Right, Body, Card, CardItem} from "native-base";
import {Image, View, Alert} from 'react-native';
import TFORM from "tcomb-form-native";
import Moment from 'moment';

var Form = TFORM.form.Form;

var form1 = TFORM.struct({
    field1: TFORM.String,              // a required string
    field2: TFORM.String,              // a required string
    field3: TFORM.String,              // a required string
    field4: TFORM.Date              // a required string
});

var options1 = {
    fields: {
        field1: {
            label: 'Nama'
        },
        field2: {
            label: 'No Telefon'
        },
        field3: {
            label: 'Alamat'
        },
        field4: {
            label: 'Tarikh Akhir Langganan',
            mode: 'date',
            config: {
                format:(date) => myFormatFunction("DD/MMM/YYYY", date)
            }
        }
    }
};

let myFormatFunction = (format,date) =>{
    return Moment(date).format(format);
}

export default class About extends Component {

  render() {
    return(
        <Container>
            <Header style={{backgroundColor: '#4469ff'}}>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Khairat Kematian</Text>
                </Body>
                <Right/>
            </Header>
            <Content padder>

                <Card>
                    <CardItem>
                        <Body style={{alignItems: 'stretch'}}>
                        <Form
                            ref="form"
                            type={form1}
                            options={options1}
                            onChange={this.onChange}
                        />
                        <Button block onPress={() => this.onSubmit()}>
                            <Text>Submit</Text>
                        </Button>
                        </Body>
                    </CardItem>

                </Card>

            </Content>
        </Container>
    )
  }

    onSubmit() {
        Alert.alert("onsubmit");
    }
}