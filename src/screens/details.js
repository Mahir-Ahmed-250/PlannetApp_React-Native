import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import PlanetHeader from '../Components/Planet-Header'
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import Text from '../Components/text/text'

export default function Details({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader backBtn={true} />
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