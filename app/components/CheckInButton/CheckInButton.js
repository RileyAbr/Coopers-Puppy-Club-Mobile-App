import React from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Button } from "react-native-elements";

const CheckInButton = ({ title, handleCheckIn }) => {
    const ToeBeanSize = 90;
    const FootSize = 210;

    const theme = useTheme();

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View
                style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "center",
                    marginBottom: -35,
                }}
            >
                <View
                    style={{
                        width: ToeBeanSize,
                        height: ToeBeanSize,
                        backgroundColor: theme.colors.primary,
                        borderRadius: ToeBeanSize,
                        marginTop: 60,
                    }}
                />
                <View
                    style={{
                        width: ToeBeanSize,
                        height: ToeBeanSize,
                        backgroundColor: theme.colors.primary,
                        borderRadius: ToeBeanSize,
                        marginLeft: 0,
                        marginRight: 5,
                    }}
                />
                <View
                    style={{
                        width: ToeBeanSize,
                        height: ToeBeanSize,
                        backgroundColor: theme.colors.primary,
                        borderRadius: ToeBeanSize,
                        marginLeft: 5,
                        marginRight: 0,
                    }}
                />
                <View
                    style={{
                        width: ToeBeanSize,
                        height: ToeBeanSize,
                        backgroundColor: theme.colors.primary,
                        borderRadius: ToeBeanSize,
                        marginTop: 60,
                    }}
                />
            </View>
            <Button
                title={title}
                onPress={handleCheckIn}
                buttonStyle={{
                    width: FootSize,
                    height: FootSize,
                    borderRadius: FootSize,
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.textLight,
                }}
                titleStyle={{
                    fontFamily: theme.fonts.heading.family,
                    fontSize: theme.fonts.heading.size,
                }}
            />
        </View>
    );
};

export default CheckInButton;
