import React, { useState, useEffect } from "react";
import { View, Button, Text } from "react-native";
import { Input } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import {
    readSignInStatusFromStorage,
    removeSignInStatusFromStorage,
} from "../../services/storage.auth.service";
import { getLoginUser } from "../../services/mongoDB.service";

const Stack = createStackNavigator();

const Profile = ({ handleClearAuthToken }) => {
    const ProfileForm = () => {
        const [userData, setUserData] = useState(getLoginUser());
        const [userAuthToken, setUserAuthToken] = useState();

        const getAuthToken = async () => {
            const item = await readSignInStatusFromStorage();
            setUserAuthToken(item);
        };

        const clearAuthToken = async () => {
            await removeSignInStatusFromStorage();
            setUserAuthToken(null);
        };

        const onChangeValue = (key, value) => {
            const newUserData = { ...userData, [key]: value };
            setUserData(newUserData);
        };

        useEffect(() => {
            getAuthToken();
        }, []);

        return (
            <View style={{ marginTop: 15 }}>
                <Text>{userAuthToken}</Text>

                <Input
                    placeholder="First Name"
                    leftIcon={{ type: "font-awesome", name: "user" }}
                    textContentType="name"
                    autoCompleteType="username"
                    keyboardType="default"
                    value={userData.firstName}
                    onChangeText={(text) => onChangeValue("firstName", text)}
                />
                <Input
                    placeholder="Last Name"
                    leftIcon={{ type: "font-awesome", name: "user" }}
                    textContentType="name"
                    autoCompleteType="username"
                    keyboardType="default"
                    value={userData.lastName}
                    onChangeText={(text) => onChangeValue("lastName", text)}
                />

                <Input
                    placeholder="email@sample.com"
                    leftIcon={{ type: "font-awesome", name: "envelope" }}
                    textContentType="emailAddress"
                    autoCompleteType="email"
                    keyboardType="email-address"
                    value={userData.email}
                    onChangeText={(text) => onChangeValue("email", text)}
                />

                <Input
                    placeholder="Password"
                    leftIcon={{ type: "font-awesome", name: "lock" }}
                    textContentType="password"
                    autoCompleteType="username"
                    keyboardType="default"
                    secureTextEntry
                    value={userData.password}
                    onChangeText={(text) => onChangeValue("password", text)}
                />

                <Input
                    placeholder="Favorite Park"
                    leftIcon={{ type: "font-awesome", name: "tree" }}
                    keyboardType="default"
                    value={userData.favPark}
                    onChangeText={(text) => onChangeValue("favPark", text)}
                />

                <Input
                    placeholder="Dog's Name"
                    leftIcon={{ type: "font-awesome", name: "paw" }}
                    keyboardType="default"
                    value={userData.dogName}
                    onChangeText={(text) => onChangeValue("dogName", text)}
                />

                <Button title="Logout" onPress={() => handleClearAuthToken()} />
            </View>
        );
    };

    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileForm} />
        </Stack.Navigator>
    );
};

export default Profile;
