import React from "react";
import { View, Button, Text } from "react-native";

const Login = ({ handleSetAuthToken, value }) => (
    <View>
        <Button title="Login" onPress={handleSetAuthToken} />
        <Text>Test {value}</Text>
    </View>
);

export default Login;
