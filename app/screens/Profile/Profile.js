import React from "react";
import { View, Text } from "react-native";
import { Input } from "react-native-elements";

const Profile = () => (
    <View>
        <View style={{ flex: 1, alignItems: "center" }}>
            <Text>Hello, USER!</Text>
        </View>
        <View>
            <Input
                placeholder="Name"
                leftIcon={{ type: "font-awesome", name: "user" }}
                textContentType="name"
                autoCompleteType="username"
                keyboardType="default"
            />

            <Input
                placeholder="email@sample.com"
                leftIcon={{ type: "font-awesome", name: "envelope" }}
                textContentType="emailAddress"
                autoCompleteType="email"
                keyboardType="email-address"
                errorStyle={{ color: "red" }}
                errorMessage="Not a valid email address"
            />

            <Input
                placeholder="Password"
                leftIcon={{ type: "font-awesome", name: "lock" }}
                textContentType="password"
                autoCompleteType="username"
                keyboardType="default"
                secureTextEntry
            />

            <Input
                placeholder="Favorite Park"
                leftIcon={{ type: "font-awesome", name: "tree" }}
                keyboardType="default"
            />

            <Input
                placeholder="Dog's Name"
                leftIcon={{ type: "font-awesome", name: "paw" }}
                keyboardType="default"
            />
        </View>
    </View>
);

export default Profile;
