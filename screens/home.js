import React from "react";
import {createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';
import {Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, Card, CardItem } from "native-base";

const TabNavigator = createMaterialTopTabNavigator({
    Tab1: Tab1,
    Tab2: Tab2,
    Tab3: Tab3
}, {
    swipeEnabled: true,
    tabBarPosition: 'top',
    tabBarOptions: {
        activeTintColor: '#ffffff',
        indicatorStyle: {
            backgroundColor: '#4a8995',
            height: 6
        },
        style: {
            backgroundColor: '#b73322',
        },
    }
});

// export default class Home extends React.Component {
//     static router = createAppContainer(TabNavigator).router;
//     render() {
//         return (
//             <Container>
//                 {/*<Header>*/}
//                     {/*<Body>*/}
//                     {/*<Title>Surau Al-Ansar</Title>*/}
//                     {/*</Body>*/}
//                     {/*<Right>*/}
//                         {/*<Button transparent onPress={() => this.props.navigation.navigate('About')}>*/}
//                             {/*<Text>About</Text>*/}
//                         {/*</Button>*/}
//                     {/*</Right>*/}
//                 {/*</Header>*/}
//                 <Content>
//                     <TabNavigator
//                         navigation={this.props.navigation}
//                     />
//                 </Content>
//             </Container>
//
//         );
//     }
// }

export default createAppContainer(TabNavigator);