import React from 'react';
import { AppProvider } from './context/AppContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import AppBar from './components/AppBar';

//Screens
import Home from './screens/Home';
import Sheds from './screens/Sheds';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';

//icons
//import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

function MyStacks() {
    return (
        <Stack.Navigator
            initialRouteName='Welcome'
        >
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Sheds'
                component={Sheds}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Login'
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Signup'
                component={Signup}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//     return (
//         <Tab.Navigator
//             initialRouteName='Home'
//             screenOptions={{
//                 tabBarActiveTintColor: 'blue',
//                 tabBarActiveBackgroundColor: 'green',
//                 tabBarInactiveTintColor: 'purple',
//                 tabBarInactiveBackgroundColor: 'pink'
//             }}
//         >
//             <Tab.Screen
//                 name='Home'
//                 component={MyStacks}
//                 options={{
//                     title: "Inicio",
//                     headerShown: false,
//                     tabBarIcon: ({ color, size }) => (
//                         <Ionicons name="ios-home" size={size} color={color} />
//                     )
//                 }}
//             />
//             <Tab.Screen
//                 name='Sheds'
//                 component={Sheds}
//                 options={{
//                     tabBarLabel: 'Precios',
//                     headerShown: false,
//                     tabBarIcon: ({ color, size }) => (
//                         <Ionicons name="add-circle" size={size} color={color} />
//                     )
//                 }}
//             />
//         </Tab.Navigator>
//     )
// }

export default function Navigation() {
    return (
        <AppProvider>
            <NavigationContainer>
                <AppBar />
                {/* <MyTabs /> */}
                <MyStacks />
            </NavigationContainer>
        </AppProvider>
    )
}