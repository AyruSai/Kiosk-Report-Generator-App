import React from 'react';
// import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
//Test

const LoginPage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Anudeep</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',  
        alignItems: 'center',
    },
    text: {
        color: 'red',
        fontSize: 24,
    },
});

export default LoginPage;
