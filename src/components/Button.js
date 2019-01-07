import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
    button: {
        fontSize: 30,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    }, 
    operationButton: {
        color: '#fff',
        backgroundColor: '#cc0000'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
});

export default class Button extends Component {
    render () {
        return (
            <TouchableHighlight /*onPress={props.onClick}*/>
                <Text style={styles.button}>{this.props.label}</Text>
            </TouchableHighlight>
        );
    }
}