import React from "react";
import { Text } from "react-native-elements";
import { useTheme } from "@react-navigation/native";

const AppSubheading = ({ children, hasLightBackground }) => {
    const theme = useTheme();
    return (
        <Text
            style={{
                fontFamily: theme.fonts.subheading,
                color: hasLightBackground ? theme.colors.text : theme.colors.textLight,
                fontSize: 24,
            }}
        >
            {children}
        </Text>
    );
};

export default AppSubheading;
