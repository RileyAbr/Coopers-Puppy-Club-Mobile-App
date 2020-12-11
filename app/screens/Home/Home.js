import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

const ToeBeanSize = 90;

const Home = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View
            style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: -35,
            }}
        >
            <View
                style={{
                    width: ToeBeanSize,
                    height: ToeBeanSize,
                    backgroundColor: 'blue',
                    borderRadius: ToeBeanSize,
                    marginTop: 60,
                }}
            />
            <View
                style={{
                    width: ToeBeanSize,
                    height: ToeBeanSize,
                    backgroundColor: 'blue',
                    borderRadius: ToeBeanSize,
                    marginLeft: 0,
                    marginRight: 5,
                }}
            />
            <View
                style={{
                    width: ToeBeanSize,
                    height: ToeBeanSize,
                    backgroundColor: 'blue',
                    borderRadius: ToeBeanSize,
                    marginLeft: 5,
                    marginRight: 0,
                }}
            />
            <View
                style={{
                    width: ToeBeanSize,
                    height: ToeBeanSize,
                    backgroundColor: 'blue',
                    borderRadius: ToeBeanSize,
                    marginTop: 60,
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
