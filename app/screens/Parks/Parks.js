import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ParksList from "../../components/ParksList";
import ParksDetail from "../../components/ParkDetail";

const Stack = createStackNavigator();

const Parks = () => (
    <Stack.Navigator>
        <Stack.Screen name="Fargo Area Parks" component={ParksList} />
        <Stack.Screen
            name="Park"
            component={ParksDetail}
            options={({ route }) => ({ title: route.params.parkName })}
        />
    </Stack.Navigator>
);

export default Parks;
