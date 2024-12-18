import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FleetList from './screens/fleet/FleetList/FleetList';
import FleetDetail from './screens/fleet/FleetDetail/FleetDetail';
import CourseList from './screens/courses/CourseList/CourseList';
import CourseDetail from './screens/courses/CourseDetail/CourseDetail';
import NewsList from './screens/news/NewsList/NewsList';
import NewsDetail from './screens/news/NewsDetail/NewsDetail';
import CreateNews from './screens/news/CreateNews/CreateNews';
import Home from './screens/home/Home';

//Stack para la flota
const FleetStack = createNativeStackNavigator();
function FleetStackScreen() {
  return (
    <FleetStack.Navigator>
      <FleetStack.Screen name='FleetList' component={FleetList} options={{ title: 'Nuestra Flota' }} />
      <FleetStack.Screen name='FleetDetail' component={FleetDetail} options={{ title: 'Detalles' }}/>
    </FleetStack.Navigator>
  )
}

//Stack para los cursos
const CourseStack = createNativeStackNavigator();
function CourseStackScreen() {
  return (
    <CourseStack.Navigator>
      <CourseStack.Screen name='CourseList' component={CourseList} options={{ title: 'Nuestros Cursos' }} />
      <CourseStack.Screen name='CourseDetail' component={CourseDetail} options={{ title: 'Detalles' }}/>
    </CourseStack.Navigator>
  )
}

//Stack para las noticias
const NewsStack = createNativeStackNavigator();
function NewsStackScreen() {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen name='NewsList' component={NewsList} options={{ title: 'Noticias' }} />
      <NewsStack.Screen name='NewsDetail' component={NewsDetail} options={{ title: 'Detalles' }}/>
      <NewsStack.Screen name='CreateNews' component={CreateNews} options={{ title: 'Creación' }}/>
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
          } else if (route.name === 'Home'){
            iconName = focused ? 'home' : 'home-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0D2154',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Nuestra Flota" component={FleetStackScreen} />
      <Tab.Screen name="Cursos" component={CourseStackScreen} />
      <Tab.Screen name="Noticias" component={NewsStackScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
  );
}