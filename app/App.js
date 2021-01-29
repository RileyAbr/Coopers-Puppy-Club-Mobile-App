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
        setIsSignedIn(!isSignedIn);
    };

    return (
        <NavigationContainer theme={theme}>
            {isSignedIn && <MainTabNavigation theme={theme} handleSignOut={toggleSignIn} />}

            {!isSignedIn && <Login handleSignIn={toggleSignIn} />}
        </NavigationContainer>
    );
};

export default App;
