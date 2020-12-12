import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    parkBoxList: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    parkBox: {
        height: 160,
        width: 160,
        margin: 10,
        backgroundColor: "skyblue",
    },
});

function ParkBox({ navigation, parkName, count }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Park")}>
            <View style={styles.parkBox}>
                <Text>{parkName}</Text>
                <Text>{count}</Text>
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

const ParksList = ({ navigation }) => (
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

export default ParksList;
