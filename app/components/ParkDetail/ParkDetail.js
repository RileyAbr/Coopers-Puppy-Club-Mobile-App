import React from "react";
import { View, Text, FlatList } from "react-native";

const Item = ({ title, subtitle }) => (
    <View>
        <Text>{title}</Text>
        <Text>{subtitle}</Text>
    </View>
);

const ParkDetail = () => {
    const DATA = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "First Item",
            subtitle: "Test 1",
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Second Item",
            subtitle: "Test 2",
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "Third Item",
            subtitle: "Test 3",
        },
    ];

    const renderItem = ({ item }) => <Item title={item.title} subtitle={item.subtitle} />;

    return <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />;
};

export default ParkDetail;
