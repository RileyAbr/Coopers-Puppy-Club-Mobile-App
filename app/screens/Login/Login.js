import React from "react";
import { View, Image } from "react-native";
import { Input } from "react-native-elements";
import AppButton from "../../components/AppButton";

import logo from "../../assets/logo_transparent2.png";

const Login = ({ handleSetAuthToken }) => (
    <View
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
        }}
    >
        <Image source={logo} />

        <View style={{ width: "80%" }}>
            <Input
                placeholder="email@sample.com"
                leftIcon={{ type: "font-awesome", name: "envelope" }}
                textContentType="emailAddress"
                autoCompleteType="email"
                keyboardType="email-address"
            />

            <Input
                placeholder="Password"
                leftIcon={{ type: "font-awesome", name: "lock" }}
                textContentType="password"
                autoCompleteType="username"
                keyboardType="default"
                secureTextEntry
            />
        </View>

        <AppButton title="Login" onPress={handleSetAuthToken} />
    </View>
);

export default Login;
