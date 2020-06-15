import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Audio} from 'expo-av';

export default function App() {

    useEffect(() => {
        PlayAudio();
    }, []);

    const PlayAudio = async () => {
        const soundObject = new Audio.Sound();
        try {
            await soundObject.loadAsync(require('./assets/SilentPartner.mp3'));
            await soundObject.playAsync();
            // Your sound is playing!
        } catch (error) {
            // An error occurred!
        }
    };

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
