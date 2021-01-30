import React from "react";
import { View, Button, Text } from "react-native";

const Login = ({ handleSignIn, value }) => (
    <View>
        <Button title="Login" onPress={handleSignIn} />
        <Text>Test {value}</Text>
    </View>
);

export default Login;
