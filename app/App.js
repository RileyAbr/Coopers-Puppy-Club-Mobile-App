import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
    readSignInStatusFromStorage,
    writeSignInStatusToStorage,
} from "./services/storage.auth.service";
import MainTabNavigation from "./screens/MainTabNavigation";
import Login from "./screens/Login";

import theme from "./theme";

const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [userAuthToken, setUserAuthToken] = useState();

    const getAuthToken = async () => {
        const item = await readSignInStatusFromStorage();
        setUserAuthToken(item);
    };

    const setAuthToken = async (newValue) => {
        await writeSignInStatusToStorage(newValue);
        setUserAuthToken(newValue);
    };

    useEffect(() => {
        getAuthToken();
    }, []);

    const toggleSignIn = () => {
        setIsSignedIn(!isSignedIn);
    };

    return (
        <NavigationContainer theme={theme}>
            {isSignedIn && <MainTabNavigation theme={theme} handleSignOut={toggleSignIn} />}

            {!isSignedIn && (
                <Login
                    handleSignIn={() => setAuthToken(Math.random().toString(36).substr(2, 5))}
                    value={userAuthToken}
                />
            )}
        </NavigationContainer>
    );
};

export default App;
