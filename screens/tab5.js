import React from "react";
import {Container, Content, Icon, Right, Text, Card, CardItem } from "native-base";

export default class Tab5 extends React.Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }


    render() {
    return(
        <Container>
            <Content padder>

                <Card>
                    <CardItem header bordered>
                        <Text>Keahlian</Text>
                    </CardItem>
                    <CardItem button onPress={() => this.props.navigation.navigate('KK')}>
                        <Icon active type="FontAwesome" name="edit" />
                        <Text>Khairat Kematian</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>

                </Card>

                <Card>
                    <CardItem header bordered>
                        <Text>Borang Aktiviti</Text>
                    </CardItem>

                    <CardItem>
                        <Icon active type="FontAwesome" name="edit" />
                        <Text>Tahlil</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>

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