import React from "react";
import { Button } from "react-native-elements";
import { useTheme } from "@react-navigation/native";

const AppButton = ({ title, onPress }) => {
    const theme = useTheme();
    return (
        <Button
            title={title}
            onPress={onPress}
            buttonStyle={{
                backgroundColor: theme.colors.primary,
                paddingVertical: 7,
                paddingHorizontal: 12,
            }}
            titleStyle={{
                fontFamily: theme.fonts.body.family,
                fontSize: theme.fonts.body.size + 1,
            }}
        />
    );
};

export default AppButton;
