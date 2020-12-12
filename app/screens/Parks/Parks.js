import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ParksList from "../../components/ParksList";
import ParksDetail from "../../components/ParkDetail";

const Stack = createStackNavigator();

const Parks = () => (
    <Stack.Navigator>
        <Stack.Screen name="Parks" component={ParksList} />
        <Stack.Screen name="Park" component={ParksDetail} />
    </Stack.Navigator>
);

export default Parks;
