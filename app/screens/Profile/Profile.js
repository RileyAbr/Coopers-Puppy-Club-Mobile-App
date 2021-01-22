import React, { useState } from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";

import { getLoginUser } from "../../services/mongoDB.service";

const Stack = createStackNavigator();

const ProfileForm = () => {
    const [userData, setUserData] = useState(getLoginUser());

    const onChangeValue = (key, value) => {
        const newUserData = { ...userData, [key]: value };
        setUserData(newUserData);
    };

    return (
        <View style={{ marginTop: 15 }}>
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
        </View>
    );
};

const Profile = () => (
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileForm} />
    </Stack.Navigator>
);

export default Profile;
