import { Pressable, SafeAreaView, ScrollView, StyleSheet, View, Linking } from 'react-native'
import React from 'react'
import PlanetHeader from '../Components/planet-header'
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import Text from '../Components/text/text'
import { EarthSvg, JupiterSvg, MarsSvg, MercurySvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from '../svg';
import { MaterialIcons } from '@expo/vector-icons';


const PlanetSection = ({ title, value }) => {
    return (
        <View style={styles.planetSection}>
            <Text preset='small' style={{ textTransform: 'uppercase' }}>{title}</Text>
            <Text preset='h2'>
                {value}
            </Text>
        </View>
    )
}


export default function Details({ route }) {
    const planet = route.params.planet
    const { name, description, rotationTime, revolutionTime, radius, avgTemp, wikiLink } = planet
    const renderImage = () => {
        switch (name) {
            case "mercury": return <MercurySvg />
            case "venus": return <VenusSvg />
            case "earth": return <EarthSvg />
            case "mars": return <MarsSvg />
            case "jupiter": return <JupiterSvg />
            case "saturn": return <SaturnSvg />
            case "uranus": return <UranusSvg />
            case "neptune": return <NeptuneSvg />

        }
    }

    const onPressLink = () => {
        Linking.openURL(wikiLink)
    }

    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader backBtn={true} />
            <ScrollView>
                <View style={styles.imageView}>
                    {renderImage()}
                </View>

                <View style={styles.detailsView}>
                    <Text preset='h1' style={styles.name}>{name}</Text>
                    <Text style={styles.description} >{description}</Text>
                    <Pressable onPress={onPressLink} style={styles.source}>
                        <Text>
                            Source:
                        </Text>
                        <Text preset='h4' style={styles.wikipedia}>
                            Wikipedia
                        </Text>
                        <MaterialIcons style={{ marginTop: 3, marginLeft: 3 }} name="read-more" size={30} color="white" />
                    </Pressable>
                </View>
                <PlanetSection title="ROTATION TIME" value={rotationTime} />
                <PlanetSection title="REVOLUTION TIME" value={revolutionTime} />
                <PlanetSection title="RADIUS" value={radius} />
                <PlanetSection title="AVERAGE TEMP." value={avgTemp} />
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        paddingTop: Platform.OS === 'android' ? 30 : 0
    },
    imageView: {
        marginTop: spacing[8],
        padding: spacing[5],
        alignItems: "center",
        justifyContent: "center"
    },
    detailsView: {
        marginTop: spacing[10],
        marginHorizontal: spacing[6],
        alignItems: "center"
    },
    name: {
        textTransform: "uppercase",
        textAlign: "center"
    },
    description: {
        textAlign: "center",
        marginTop: spacing[5],
        lineHeight: 21
    },
    source: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: spacing[5],
        marginBottom: spacing[5]
    },
    wikipedia: {
        textDecorationLine: "underline",

    },
    planetSection: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: spacing[5],
        paddingVertical: spacing[4],
        borderWidth: 1,
        borderColor: colors.grey,
        marginHorizontal: spacing[6],
        marginBottom: spacing[4]
    }
})