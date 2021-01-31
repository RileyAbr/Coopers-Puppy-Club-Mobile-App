import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
    readSignInStatusFromStorage,
    writeSignInStatusToStorage,
    removeSignInStatusFromStorage,
} from "./services/storage.auth.service";
import MainTabNavigation from "./screens/MainTabNavigation";
import LoginScreenNavigation from "./screens/LoginScreenNavigation";

import theme from "./theme";

const App = () => {
    const [userAuthToken, setUserAuthToken] = useState();

    const getAuthToken = async () => {
        const item = await readSignInStatusFromStorage();
        setUserAuthToken(item);
    };

    const setAuthToken = async (newValue) => {
        await writeSignInStatusToStorage(newValue);
        setUserAuthToken(newValue);
    };

    const clearAuthToken = async () => {
        await removeSignInStatusFromStorage();
        setUserAuthToken(null);
    };

    useEffect(() => {
        getAuthToken();
    }, []);

    return (
        <NavigationContainer theme={theme}>
            {userAuthToken && (
                <MainTabNavigation theme={theme} handleClearAuthToken={() => clearAuthToken()} />
            )}

            {!userAuthToken && (
                <LoginScreenNavigation
                    theme={theme}
                    handleSetAuthToken={() => setAuthToken(Math.random().toString(36).substr(2, 5))}
                />
            )}

            {/* {!userAuthToken && (
                <Login handleSignIn={() => setAuthToken(Math.random().toString(36).substr(2, 5))} />
            )} */}
        </NavigationContainer>
    );
};

export default App;
