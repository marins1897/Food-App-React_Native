import { StyleSheet, StatusBar, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
//import FavoritesContextProvider from "./store/context/favorites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";


import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator  screenOptions={{
                            headerStyle: { backgroundColor: '#2e0401' },
                            headerTintColor: 'white',
                            //sceneContainerStyle: { backgroundColor : '#85423f' },
                            tabBarActiveTintColor: '#451a18',
                            tabBarInactiveTintColor: '#9d7b7a',
                            tabBarActiveBackgroundColor: '#9d7b7a',
                            tabBarInactiveBackgroundColor: '#3e1917',
    }}
    >
      <BottomTab.Screen name="Categories" component={CategoriesScreen} 
                      options={{
                        tabBarIcon: ({ color, size }) => (
                          <Ionicons name="list" color={color} size={size} />
                        ),
                        tabBarStyle: {
                          backgroundColor: 'red'
                        }
                      }} />
      <BottomTab.Screen name="Favorites" component={FavoritesScreen} options={{
                        tabBarIcon: ({ color, size }) => (
                          <Ionicons name="heart" color={color} size={size} />
                        )
                      }}  />
    </BottomTab.Navigator>
  )
}
const navigationTheme = {
  colors: {
    background: '#4a1b18'
  },
};

export default function App() {
  return (
    <>
    <StatusBar style='light' />
    {/**<FavoritesContextProvider>*/}
    <Provider store={store}>
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#2e0401' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#401d1b' },
        }}>
        <Stack.Screen name="MealCategories" 
                      component={BottomTabNavigator} 
                      options={{
                        headerShown: false
                      }}
        />
        <Stack.Screen name="MealsOverview" 
                      component={MealsOverviewScreen}
        />
        <Stack.Screen name="MealDetail" 
                      component={MealDetailScreen}
                      options={{ 
                          title : 'About the Meal'
                      }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    {/**</FavoritesContextProvider>*/}
    </>
  );
}

const styles = StyleSheet.create({
  
});
