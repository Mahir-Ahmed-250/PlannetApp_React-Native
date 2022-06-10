import { View, SafeAreaView, FlatList, StyleSheet, Platform, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
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
    const [list, setList] = useState(PLANET_LIST);
    const renderItem = ({ item }) => {

        return (
            < PlanetItem item={item} />
        )
    }

    const searchFilter = (text) => {
        const filteredList = PLANET_LIST.filter((item) => {
            const itemName = item.name.toLocaleLowerCase();
            const userTypedText = text.toLocaleLowerCase();

            return itemName.indexOf(userTypedText) > -1;
        })
        setList(filteredList)
    }


    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader />
            <TextInput style={styles.searchInput} placeholder='Type the planet name' placeholderTextColor={colors.white}
                autoCorrect={false} onChangeText={(text) => {
                    searchFilter(text)
                }} />
            <FlatList data={list}
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
    },
    searchInput: {
        padding: spacing[4],
        color: colors.white,
        borderBottomColor: colors.white,
        borderBottomWidth: 1,
        margin: spacing[5]
    }
})