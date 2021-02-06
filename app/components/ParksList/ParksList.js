import React from "react";
import { useTheme } from "@react-navigation/native";
import { View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { getParks } from "../../services/mongoDB.service";
import AppSubheading from "../AppSubheading";

function ParkBox({ navigation, parkName, count }) {
    const theme = useTheme();

    const styles = StyleSheet.create({
        parkBox: {
            height: 160,
            width: 160,
            margin: 10,
            backgroundColor: theme.colors.primary,
            alignContent: "center",
            padding: 5,
        },
        parkBoxWrapper: {
            flex: 1,
            justifyContent: "space-between",
        },
        parkBoxTitle: {
            alignSelf: "flex-start",
        },
        parkBoxCount: {
            alignSelf: "flex-end",
        },
    });

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Park", { parkName })}>
            <View style={styles.parkBox}>
                <View style={styles.parkBoxWrapper}>
                    <AppSubheading>{parkName}</AppSubheading>
                    <View style={styles.parkBoxCount}>
                        <AppSubheading>
                            {count}{" "}
                            <Icon
                                name="dog"
                                type="material-community"
                                size={26}
                                color={theme.colors.textLight}
                                style={{ marginBottom: -5 }}
                            />
                        </AppSubheading>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const parks = getParks();

const ParksList = ({ navigation }) => {
    const styles = StyleSheet.create({
        parkBoxList: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-evenly",
        },
    });

    return (
        <SafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View style={styles.parkBoxList}>
                    {parks.map((park) => (
                        <ParkBox
                            key={park.parkName}
                            parkName={park.parkName}
                            navigation={navigation}
                            count={park.count}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ParksList;
