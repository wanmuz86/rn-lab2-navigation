import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Passed the props as parameter
// retrieve props route to get the parameters passed
const DetailsScreen = ({ navigation, route }) => {
    // perform object destructuring to get data

    // Object destructuring in ES6/JS
    // const itemId = route.params.itemId
    // const message = route.params.message
    const { itemId, message } = route.params


    return (
        <View>
            <Text>DetailsScreen</Text>
            {/* navigation.goBack  - goBack to the previous page*/}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Received Params</Text>
                <Text style={styles.mono}>itemId: {String(itemId)}</Text>
                <Text style={styles.mono}>message: {message}</Text>
            </View>


            <Pressable onPress={() => navigation.goBack()} style={styles.button}>
                <Text style={styles.buttonText}>Back to the first page</Text>
            </Pressable>
        </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, gap: 14, justifyContent: "center" },
    title: { fontSize: 26, fontWeight: "700" },
    subtitle: { fontSize: 16, opacity: 0.8 },
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
    secondary: {
        borderColor: "#444",
        opacity: 0.9,
    },
    buttonText: { fontSize: 16, fontWeight: "600" },
}
)