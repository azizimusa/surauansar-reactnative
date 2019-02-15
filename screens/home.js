import React from "react";
import {createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';

const TabNavigator = createMaterialTopTabNavigator({
    Utama: Tab1,
    Ceramah: Tab2,
    Aktiviti: Tab3
}, {
    swipeEnabled: true,
    tabBarPosition: 'top',
    tabBarOptions: {
        activeTintColor: '#ffffff',
        indicatorStyle: {
            backgroundColor: '#FFF',
            height: 6
        },
        style: {
            backgroundColor: '#4469ff',
        },
    }
});

export default createAppContainer(TabNavigator);