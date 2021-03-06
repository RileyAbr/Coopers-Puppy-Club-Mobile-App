import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../Login";

const Stack = createStackNavigator();

const LoginScreenNavigation = ({ handleSetAuthToken }) => {
    const LoginScreen = () => <Login handleSetAuthToken={handleSetAuthToken} />;

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
};

export default LoginScreenNavigation;
