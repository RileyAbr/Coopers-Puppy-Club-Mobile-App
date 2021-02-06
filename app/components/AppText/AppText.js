import React from "react";
import { Text } from "react-native-elements";
import { useTheme } from "@react-navigation/native";

const AppText = ({ children, hasLightBackground }) => {
    const theme = useTheme();
    return (
        <Text
            style={{
                fontFamily: theme.fonts.body.family,
                fontSize: theme.fonts.body.size,
                color: hasLightBackground ? theme.colors.text : theme.colors.textLight,
            }}
        >
            {children}
        </Text>
    );
};

export default AppText;
