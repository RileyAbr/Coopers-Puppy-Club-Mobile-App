import React from "react";
import { Text } from "react-native-elements";
import { useTheme } from "@react-navigation/native";

const AppText = ({ children, hasLightBackground }) => {
    const theme = useTheme();
    return (
        <Text
            style={{
                fontFamily: theme.fonts.body,
                color: hasLightBackground ? theme.colors.text : theme.colors.textLight,
                fontSize: 16,
            }}
        >
            {children}
        </Text>
    );
};

export default AppText;
