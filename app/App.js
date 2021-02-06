import React, { useState, useEffect } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {
    readSignInStatusFromStorage,
    writeSignInStatusToStorage,
    removeSignInStatusFromStorage,
} from "./services/storage.auth.service";
import colorCodes from "./theme/theme-color-codes.json";
import fontFamilies from "./theme/theme-font-families.json";

import MainTabNavigation from "./screens/MainTabNavigation";
import LoginScreenNavigation from "./screens/LoginScreenNavigation";

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

    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: colorCodes.lightBlue,
            background: !userAuthToken ? colorCodes.tan : colorCodes.offWhite, // This line sets the background of the login screen to tan before the user logs in
            card: colorCodes.tan,
            cardBorder: colorCodes.leather,
            text: colorCodes.offBlack,
            textLight: colorCodes.offWhite,
        },
        fonts: {
            heading: {
                family: fontFamilies.heading,
                size: 24,
            },
            subheading: {
                family: fontFamilies.subheading,
                size: 22,
            },
            body: { family: fontFamilies.body, size: 16 },
        },
    };

    return (
        <NavigationContainer theme={theme}>
            {/* Main Route */}
            {userAuthToken && <MainTabNavigation handleClearAuthToken={() => clearAuthToken()} />}

            {/* Login Route */}
            {!userAuthToken && (
                <LoginScreenNavigation
                    handleSetAuthToken={() => setAuthToken(Math.random().toString(36).substr(2, 5))}
                />
            )}
        </NavigationContainer>
    );
};

export default App;
