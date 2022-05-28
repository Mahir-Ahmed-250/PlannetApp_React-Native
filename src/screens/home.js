import { SafeAreaView, StyleSheet, Platform } from 'react-native'
import React from 'react'
import PlanetHeader from '../Components/planet-header';
import { colors } from '../theme/colors';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        paddingTop: Platform.OS === 'android' ? 30 : 0
    }
})