import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import ParksList from './screens/ParksList';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();

const TabNavigation = () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="ParksList" component={ParksList} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
);

const App = () => (
    <NavigationContainer>
        <TabNavigation />
    </NavigationContainer>
);

export default App;
