import React from "react";
import { View, Image, Text } from "react-native";
import { Input, Button } from "react-native-elements";

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

        <Text style={{ fontSize: 18, fontFamily: "Baloo2-Regular" }}>
            Almost before we knew it, we had left the ground.
        </Text>
        <Text style={{ fontSize: 18, fontFamily: "serif" }}>
            Almost before we knew it, we had left the ground.
        </Text>
        <Text style={{ fontSize: 18 }}>Almost before we knew it, we had left the ground.</Text>

        <Button title="Login" onPress={handleSetAuthToken} />
    </View>
);

export default Login;
