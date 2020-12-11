import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

const Home = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View
            style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: -15,
            }}
        >
            <View
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'black',
                    borderRadius: 100,
                    marginTop: 45,
                }}
            />
            <View
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'black',
                    borderRadius: 100,
                    marginVertical: 0,
                    marginHorizontal: 10,
                }}
            />
            <View
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'black',
                    borderRadius: 100,
                    marginTop: 45,
                }}
            />
        </View>
        <Button
            title="Check-in"
            buttonStyle={{
                width: 210,
                height: 210,
                borderRadius: 200,
            }}
        />
    </View>
);

export default Home;
