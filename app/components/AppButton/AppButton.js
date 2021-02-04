import React from "react";
import { Button } from "react-native-elements";
import { useTheme } from "@react-navigation/native";

const AppButton = ({ title, onPress }) => {
    const theme = useTheme();
    return (
        <Button
            title={title}
            onPress={onPress}
            buttonStyle={{ backgroundColor: theme.colors.primary }}
        />
    );
};

export default AppButton;
