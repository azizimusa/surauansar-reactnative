/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {createStackNavigator, createAppContainer, Header} from 'react-navigation';
import HomeScreen from './screens/home';
import About from './screens/about';
import KhairatKematian from './screens/kk';
import React from "react";
import {Container, Title, Content, Button, Icon, Left, Right, Body, Text, Card, CardItem } from "native-base";

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Surau Al-Ansar',
            headerStyle: {
                backgroundColor: '#4469ff',
                shadowOpacity: 0,
                elevation: 0,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerRight: (
                <Button transparent onPress={() => navigation.navigate('About')}
                style={{flex: 1, alignItems: 'center', justifyContent: 'center', height: Header.HEIGHT}}>
                    <Text style={{color: 'white'}}>About</Text>
                </Button>
            ),
        }),
    },
    About: {
        screen: About,
        navigationOptions: () => ({
            header: null
        }),
    },
    KK: {
        screen: KhairatKematian,
        navigationOptions: () => ({
            header: null
        }),
    }

});

export default createAppContainer(AppNavigator);
