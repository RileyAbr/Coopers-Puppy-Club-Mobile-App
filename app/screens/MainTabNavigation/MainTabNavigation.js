import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { useTheme } from "@react-navigation/native";

// Screens
import Home from "../Home";
import Parks from "../Parks";
import Profile from "../Profile";

const Tab = createBottomTabNavigator();

const MainTabNavigation = ({ handleClearAuthToken }) => {
    const { colors } = useTheme();

    const NavigationProfile = () => <Profile handleClearAuthToken={handleClearAuthToken} />;

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
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
                activeTintColor: colors.primary,
                inactiveTintColor: "#5E503F",
            }}
        >
            <Tab.Screen name="Parks" component={Parks} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={NavigationProfile} />
        </Tab.Navigator>
    );
};

export default MainTabNavigation;
