import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import CreateFleet from './screens/CreateFleet';
import FleetList from './screens/FleetList';
import FleetDetail from './screens/FleetDetail';


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='FleetList' component={FleetList} />
      <Stack.Screen name='CreateFleet' component={CreateFleet} />
      <Stack.Screen name='FleetDetail' component={FleetDetail} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
