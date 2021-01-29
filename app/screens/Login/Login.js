import React from "react";
import { View, Button } from "react-native";

const Login = ({ handleSignIn }) => (
    <View>
        <Button title="Login" onPress={handleSignIn} />
    </View>
);

export default Login;
