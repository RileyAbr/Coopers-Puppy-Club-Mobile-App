import React from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";

import { getCheckIns } from "../../services/mongoDB.service";

const ParkDetail = () => {
    const checkIns = getCheckIns();

    const keyExtractor = (item, index) => index.toString();

    const renderItem = ({ item }) => (
        <ListItem bottomDivider>
            <ListItem.Content>
                <ListItem.Title style={{ fontSize: 24 }}>{item.dogName}</ListItem.Title>
                <ListItem.Subtitle>Owner: {item.userName}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );

    return <FlatList keyExtractor={keyExtractor} data={checkIns} renderItem={renderItem} />;
};

export default ParkDetail;
