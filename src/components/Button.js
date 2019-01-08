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
        backgroundColor: '#00008b'
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
        const stylesButton = [styles.button];

        if (this.props.double) stylesButton.push(styles.buttonDouble);

        if(this.props.triple) stylesButton.push(styles.buttonTriple);

        if(this.props.operation) stylesButton.push(styles.operationButton);

        return (
            <TouchableHighlight onPress={this.props.onClick}>
                <Text style={stylesButton}>{this.props.label}</Text>
            </TouchableHighlight>
        );
    }
}