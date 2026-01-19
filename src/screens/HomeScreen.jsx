import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Props refers to the navigation stack
// Reference to the navigation tree at the moment
const HomeScreen = ({ navigation }) => {

    // Params we will pass to Details
    const payload = {
        itemId: 101,
        message: "Hello from Home!",
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            {/* UI Element to make the text clickable  , and to have more flexibility on the styling*/}
            {/* navigation.navigate Open the Details page */}
            {/* 'Details' page is defined in the name parameters in root navigator */}
            <Pressable style={styles.button}
                onPress={() => navigation.navigate('Details', payload)}
            >
                <Text style={styles.buttonText}>Go to detail page</Text>
            </Pressable>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, gap: 14, justifyContent: "center" },
    title: { fontSize: 26, fontWeight: "700" },
    subtitle: { fontSize: 16, opacity: 0.8, lineHeight: 22 },
    card: {
        padding: 14,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ddd",
        backgroundColor: "#fafafa",
        gap: 6,
    },
    cardTitle: { fontSize: 16, fontWeight: "600" },
    mono: { fontFamily: "Menlo", fontSize: 14 },
    button: {
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#111",
    },
    buttonText: { fontSize: 16, fontWeight: "600" },
}
)