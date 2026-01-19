/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { StatusBar, StyleSheet, useColorScheme, View, Text, Image } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  // Where we define the UI
  return (
    // Padding on a mobile app
    // SafeAreaProvider , SafeAreaView
    <SafeAreaProvider>
      {/* Set the statusbar color style based on Dark mode or light mode */}
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* Look for app content function */}
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    // View is like a div / container or box in HTML
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Hello Mobile app</Text>
        <Text style={styles.subtitle}>This is my first React Native app!</Text>
        <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={styles.image}
        ></Image>
      </View>
    </SafeAreaView>
  );
}

// Where we define the style/ css of the page
// Based of flex and box model
const styles = StyleSheet.create({
   container: {
    flex: 1,
    // to center the content
    justifyContent: 'center',
    // align my childrem to the center
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize:16,
    marginBottom:20
  },
  image: {
    width: 80,
    height: 80,
  },

});

export default App;
