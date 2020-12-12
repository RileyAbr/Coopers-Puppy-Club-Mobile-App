import React from "react";
import { useTheme } from "@react-navigation/native";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

function ParkBox({ navigation, parkName, count }) {
    const { colors } = useTheme();

    const styles = StyleSheet.create({
        parkBox: {
            height: 160,
            width: 160,
            margin: 10,
            backgroundColor: colors.primary,
            alignContent: "center",
            padding: 5,
        },
        parkBoxWrapper: {
            flex: 1,
            justifyContent: "space-between",
        },
        parkBoxText: {
            color: colors.lightText,
        },
        parkBoxTitle: {
            fontSize: 34,
            alignSelf: "flex-start",
        },
        parkBoxCount: {
            fontSize: 26,
            alignSelf: "flex-end",
        },
    });

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Park", { parkName })}>
            <View style={styles.parkBox}>
                <View style={styles.parkBoxWrapper}>
                    <Text style={[styles.parkBoxText, styles.parkBoxTitle]}>{parkName}</Text>
                    <Text style={[styles.parkBoxText, styles.parkBoxCount]}>
                        {count}{" "}
                        <Icon
                            name="dog"
                            type="material-community"
                            size={30}
                            color={colors.lightText}
                        />
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const mockNames = [
    { name: "Devin" },
    { name: "Dan" },
    { name: "Dominic" },
    { name: "Jackson" },
    { name: "James" },
    { name: "Joel" },
    { name: "John" },
];

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
                    {mockNames.map((park) => (
                        <ParkBox
                            key={park.name}
                            parkName={park.name}
                            navigation={navigation}
                            count={Math.floor(Math.random() * 10)}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ParksList;
