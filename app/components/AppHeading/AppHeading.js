import React from "react";
import { Text } from "react-native-elements";
import { useTheme } from "@react-navigation/native";

const AppHeading = ({ children, hasLightBackground }) => {
    const theme = useTheme();
    return (
        <Text
            style={{
                fontFamily: theme.fonts.heading,
                color: hasLightBackground ? theme.colors.text : theme.colors.textLight,
                fontSize: 24,
            }}
        >
            {children}
        </Text>
    );
};

export default AppHeading;
