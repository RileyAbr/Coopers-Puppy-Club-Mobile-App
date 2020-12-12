import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/FontAwesome";

import Home from "./screens/Home";
import Parks from "./screens/Parks";
import Profile from "./screens/Profile";

const Tab = createBottomTabNavigator();

const MainTabNavigation = () => (
    <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch (route.name) {
                    case "Home":
                        iconName = "paw";
                        break;
                    case "Parks":
                        iconName = "tree";
                        break;
                    case "Profile":
                        iconName = "user";
                        break;
                    default:
                        iconName = "question";
                        break;
                }

                // You can return any component that you like here!
                return <Icon name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
        }}
    >
        <Tab.Screen name="Parks" component={Parks} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
);

const App = () => (
    <NavigationContainer>
        <MainTabNavigation />
    </NavigationContainer>
);

export default App;
