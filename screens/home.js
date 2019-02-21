import React from "react";
import {createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';
import Tab4 from './tab4';
import Tab5 from './tab5';

const TabNavigator = createMaterialTopTabNavigator({
    Utama: Tab1,
    Ceramah: Tab2,
    Aktiviti: Tab3,
    Parking: Tab4,
    Kedai: Tab5
}, {
    swipeEnabled: true,
    tabBarPosition: 'top',
    tabBarOptions: {
        scrollEnabled: true,
        activeTintColor: '#ffffff',
        indicatorStyle: {
            backgroundColor: '#FFF',
            height: 6
        },
        tabStyle: {
            width: 100
        },
        style: {
            backgroundColor: '#4469ff',
        },
    }
});

export default createAppContainer(TabNavigator);