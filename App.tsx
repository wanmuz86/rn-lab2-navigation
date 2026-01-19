/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from './src/navigation/RootNavigator';
function App() {
  

  return (
      // As per the rules, the entire navigation needs to be embeded inside NavigationContainer from
      // react-navigation/native library
     <NavigationContainer>
      {/* Coming from  RootNavigator file, where we will define the Stack*/}
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
