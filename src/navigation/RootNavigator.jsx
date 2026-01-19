import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";

// Create the Stack Navigation
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        // Define the stack..
        // The first page of the stack will be "Home" (initialRouteName)
        // Extra configuration , add the titile and centered it
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTitleAlign: "center",
            }}
        >
            {/* Home page (defined at name propertty) as part of the stack  -> Link it to HomeScreen */}
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "Home" }}
            />
            {/* Details page as part of the Details -> Link it to Detail Screeen*/}
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{ title: "Details" }}
            />
        </Stack.Navigator>

    )
}

export default RootNavigator