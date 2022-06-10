import { View, SafeAreaView, FlatList, StyleSheet, Platform, Pressable } from 'react-native'
import React from 'react'
import PlanetHeader from '../Components/planet-header';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { PLANET_LIST } from '../data/Planet-List';
import Text from '../Components/text/text';
import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'

const PlanetItem = ({ item }) => {
    const navigation = useNavigation();
    const { name, color } = item
    return (
        <Pressable onPress={() => {
            navigation.navigate('Details', { planet: item })
        }} style={styles.item}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={[styles.circle, { backgroundColor: color }]} />
                <Text preset='h4' style={styles.itemName}>{name}</Text>
            </View>
            <AntDesign name='right' size={12} color="#999999" />
        </Pressable>
    )
}
export default function Home({ navigation }) {
    const renderItem = ({ item }) => {

        return (
            < PlanetItem item={item} />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader />
            <FlatList data={PLANET_LIST}
                contentContainerStyle={styles.list}
                keyExtractor={(item) => item.name}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        paddingTop: Platform.OS === 'android' ? 30 : 0
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: spacing[4]
    },
    itemName: {
        textTransform: 'uppercase',
        marginLeft: spacing[4]
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    list: {
        padding: spacing[4]
    },
    separator: {

        borderBottomColor: colors.white,
        borderWidth: 0.5
    }
})