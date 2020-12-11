import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import axios from "axios";

const ToeBeanSize = 90;
const FootSize = 210;

const handleCheckInPress = () => {
    const checkIn = {
        parkID: "5fbb1917a632915e007ad6f3",
        userID: "5fbb210b4826fc5d08dc9381",
        dogID: "5fbb2409e016be04e036921d",
    };

    const config = {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmJiMjQ5OGM5ZThmYzVlOWNiNzFlZDciLCJlbWFpbCI6ImFyaWNoQGdtYWlsLmNvbSIsInByb3ZpZGVyIjoiZW1haWwiLCJuYW1lIjoiQW5kcmVhIFJpY2hhcmQiLCJyZWZyZXNoS2V5IjoiUjVqcktzOEZnNlBCdnB3Y0NibG96dz09IiwiaWF0IjoxNjA3NzE2OTU1fQ.4rwrwfVrdwMWgV8RRm9Ftw-s_OzTPbRVOu2pwTC8tR8`,
        },
    };

    axios
        .post(`https://coopers-puppy-club-server.herokuapp.com/checkins`, checkIn, config)
        .then((res) => {
            alert(res.data);
        });
};

const Home = () => (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
            style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: -35,
            }}
        >
            <View
                style={{
                    width: ToeBeanSize,
                    height: ToeBeanSize,
                    backgroundColor: "skyblue",
                    borderRadius: ToeBeanSize,
                    marginTop: 60,
                }}
            />
            <View
                style={{
                    width: ToeBeanSize,
                    height: ToeBeanSize,
                    backgroundColor: "skyblue",
                    borderRadius: ToeBeanSize,
                    marginLeft: 0,
                    marginRight: 5,
                }}
            />
            <View
                style={{
                    width: ToeBeanSize,
                    height: ToeBeanSize,
                    backgroundColor: "skyblue",
                    borderRadius: ToeBeanSize,
                    marginLeft: 5,
                    marginRight: 0,
                }}
            />
            <View
                style={{
                    width: ToeBeanSize,
                    height: ToeBeanSize,
                    backgroundColor: "skyblue",
                    borderRadius: ToeBeanSize,
                    marginTop: 60,
                }}
            />
        </View>
        <Button
            title="Check-in"
            onPress={handleCheckInPress}
            buttonStyle={{
                width: FootSize,
                height: FootSize,
                borderRadius: FootSize,
            }}
        />
    </View>
);

export default Home;
