import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Ionicons2 from '@expo/vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

import CreateFleet from './screens/CreateFleet';
import FleetList from './screens/FleetList';
import FleetDetail from './screens/FleetDetail';
import CourseList from './screens/CourseList';
import CourseDetail from './screens/CourseDetail';
import NewsList from './screens/NewsList';
import NewsDetail from './screens/NewsDetail';


/*function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='FleetList' component={FleetList} />
      <Stack.Screen name='CreateFleet' component={CreateFleet} />
      <Stack.Screen name='FleetDetail' component={FleetDetail} />
    </Stack.Navigator>
  )
}*/
//Stack para la flota
const FleetStack = createNativeStackNavigator();
function FleetStackScreen() {
  return (
    <FleetStack.Navigator>
      <FleetStack.Screen name='FleetList' component={FleetList} options={{ title: 'Nuestra Flota' }} />
      <FleetStack.Screen name='FleetDetail' component={FleetDetail} />
    </FleetStack.Navigator>
  )
}

//Stack para los cursos
const CourseStack = createNativeStackNavigator();
function CourseStackScreen() {
  return (
    <CourseStack.Navigator>
      <CourseStack.Screen name='CourseList' component={CourseList} options={{ title: 'Nuestros Cursos' }} />
      <CourseStack.Screen name='CourseDetail' component={CourseDetail} />
    </CourseStack.Navigator>
  )
}

//Stack para las noticias
const NewsStack = createNativeStackNavigator();
function NewsStackScreen() {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen name='NewsList' component={NewsList} options={{ title: 'Noticias' }} />
      <NewsStack.Screen name='NewsDetail' component={NewsDetail} />
    </NewsStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

function MyStack() {
  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Nuestra Flota') {
            iconName = focused
              ? 'airplane'
              : 'airplane-outline';
          } else if (route.name === 'Cursos') {
            iconName = focused ? 'library' : 'library-outline';
          } else if (route.name === 'Noticias'){
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    
    >
      <Tab.Screen name="Nuestra Flota" component={FleetStackScreen} />
      <Tab.Screen name="Cursos" component={CourseStackScreen} />
      <Tab.Screen name="Noticias" component={NewsStackScreen} />
    </Tab.Navigator>
  )
  
}

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={"Home"}>
        <Drawer.Screen name="Home" component={MyStack} />
        <Drawer.Screen name="CreateFleet" component={CreateFleet} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
/*export default function App() {
  return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
  );
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}
*/
