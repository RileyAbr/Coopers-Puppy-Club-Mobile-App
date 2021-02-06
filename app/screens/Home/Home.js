import React, { useState } from "react";
import axios from "axios";
import CheckInButton from "../../components/CheckInButton";

const Home = () => {
    const [checkedIn, setCheckedIn] = useState(false);
    const [checkedInID, setCheckedInID] = useState();

    const handleCheckInPress = () => {
        if (checkedIn) {
            const config = {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmJiMjQ5OGM5ZThmYzVlOWNiNzFlZDciLCJlbWFpbCI6ImFyaWNoQGdtYWlsLmNvbSIsInByb3ZpZGVyIjoiZW1haWwiLCJuYW1lIjoiQW5kcmVhIFJpY2hhcmQiLCJyZWZyZXNoS2V5IjoiUjVqcktzOEZnNlBCdnB3Y0NibG96dz09IiwiaWF0IjoxNjA3NzE2OTU1fQ.4rwrwfVrdwMWgV8RRm9Ftw-s_OzTPbRVOu2pwTC8tR8`,
                },
            };

            axios
                .delete(
                    `https://coopers-puppy-club-server.herokuapp.com/checkins/${checkedInID}`,
                    config
                )
                .then((res) => {
                    setCheckedIn(false);
                    setCheckedInID(null);
                });
        } else {
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
                    setCheckedIn(true);
                    setCheckedInID(res.data.id);
                });
        }
    };

    return (
        <CheckInButton
            title={checkedIn ? "Check-out" : "Check-in"}
            handleCheckIn={handleCheckInPress}
        />
    );
};

export default Home;
