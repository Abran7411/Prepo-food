import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

// import Colors from '../constants/colors';
const MainButton = (props) => {
    return (
        <TouchableOpacity activeopacity={0.6} onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
      },
      buttonText: {
        color: 'white',
        fontFamily: 'sans-serif',
        fontSize: 18
      }
});
export default MainButton
