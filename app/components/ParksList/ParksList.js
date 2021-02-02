import React from "react";
import { useTheme } from "@react-navigation/native";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { getParks } from "../../services/mongoDB.service";

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
            color: colors.textLight,
        },
        parkBoxTitle: {
            fontSize: 26,
            alignSelf: "flex-start",
        },
        parkBoxCount: {
            fontSize: 22,
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
                            size={26}
                            color={colors.textLight}
                            style={{ marginBottom: -5 }}
                        />
                    </Text>
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
