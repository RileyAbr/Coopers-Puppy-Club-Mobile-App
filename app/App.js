import "react-native-gesture-handler";
import React, { useState } from "react";
import { View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import MainTabNavigation from "./screens/MainTabNavigation";
import Login from "./screens/Login";

import theme from "./theme";

const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const toggleSignIn = () => {
        alert(isSignedIn);
        setIsSignedIn(true);
    };

    if (isSignedIn) {
        return (
            <NavigationContainer theme={theme}>
                <MainTabNavigation theme={theme} />
            </NavigationContainer>
        );
    }
    return (
        <View>
            <Button title="Login" onPress={toggleSignIn} />
        </View>
    );
};

export default App;
