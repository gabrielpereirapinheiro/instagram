import React, { Component } from 'react';
import { View, Text, } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> {this.props.text} </Text>
            </View>
        );
    }
}

const styles = {
    container: {
        backgroundColor: "#f8f8f8",
        paddingTop: 24,
        alignItems: 'center',
        borderBottom: '#ddd',
        borderBottomWidth: 0.5,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 13
    }
}