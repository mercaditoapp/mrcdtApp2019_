import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class MenuItem extends React.Component {
    render() {
        return (
            <View style= {styles.menuItem}>
                <Image></Image>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    menuItem: {
        width: '33.333333%',
        height: '50%',
        paddig: 20, 
        backgroundColor: '#ccc',
        borderColor: '#000',
        borderWidth: 2, 
    },
    image: {
        width: '100%',
        height: '100%',
        opacity: 0.8,
        borderColor: '#fff',
        borderWidth: 3,
    }
})