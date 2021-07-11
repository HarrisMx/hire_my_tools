import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Splash = () => {
    return (
        <View styles={styles.container}>
            <Text>Splash</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000000'
    }
});

export default Splash;