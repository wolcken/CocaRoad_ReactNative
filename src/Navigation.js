import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, Text, View } from 'react-native';
import { AppProvider } from './context/AppContext';
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import AppBar from './components/AppBar';

//Screens
import Home from './screens/Home';
import Sheds from './screens/Sheds';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';
import CustomColors from './stylus/colors';

//icons
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

//Drawers navigation
const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={
                (props) => {
                    return (
                        <SafeAreaView>
                            <View style={{ 
                                height: 200,
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderBottomColor: '#f4f4f4',
                                borderBottomWidth: 1,
                                // backgroundColor: 'blue'
                             }}>
                                <Image
                                    source={require('./assets/images/pirates.png')}
                                    style={{ 
                                        height: 130,
                                        width: 130,
                                        borderRadius: 65,
                                        backgroundColor: CustomColors.primary
                                     }}
                                />
                                <Text style={{ 
                                    fontSize: 20,
                                    marginVertical: 6,
                                    fontWeight: 'bold',
                                    color: CustomColors.primary,
                                 }}>
                                    Alfredo Ramos
                                </Text>
                                <Text style={{ 
                                    fontSize: 16,
                                    color: CustomColors.secondary
                                 }}>
                                    Administrador
                                </Text>
                            </View>
                            <DrawerItemList {...props} />
                        </SafeAreaView>
                    )
                }
            }
            initialRouteName='WelcomeD'
            screenOptions={{
                drawerStyle: {
                    backgroundColor: CustomColors.white,
                    width: 200
                },
                headerStyle: {
                    backgroundColor: CustomColors.secondary
                },
                headerTintColor: CustomColors.white,
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                drawerActiveTintColor: CustomColors.primary,
                drawerLabelStyle: {
                    color: CustomColors.primary
                }
            }}
        >
            <Drawer.Screen
                name="WelcomeD"
                component={Welcome}
                options={{
                    drawerLabel: 'Home',
                    title: 'CocaRoad',
                    drawerIcon: () => (
                        <Ionicons name='home' size={24} color={CustomColors.primary} />
                    )
                }}
            />
            <Drawer.Screen
                name="Adepcoca"
                component={Home}
                options={{
                    drawerLabel: 'Adepcoca',
                    title: 'Adepcoca',
                    drawerIcon: () => (
                        <FontAwesome5 name="money-bill-wave" size={20} color={CustomColors.primary} />)
                }}
            />
            <Drawer.Screen
                name="Sacaba"
                component={Home}
                options={{
                    drawerLabel: 'Sacaba',
                    title: 'Sacaba',
                    drawerIcon: () => (
                        <FontAwesome5 name="money-bill-wave" size={20} color={CustomColors.primary} />)
                }}
            />
            <Drawer.Screen
                name="Minoristas"
                component={Home}
                options={{
                    drawerLabel: 'Minoristas',
                    title: 'Minoristas',
                    drawerIcon: () => (
                        <FontAwesome5 name="money-bill-wave" size={20} color={CustomColors.primary} />
                    )
                }}
            />
            <Drawer.Screen
                name="Login"
                component={Login}
                options={{
                    drawerLabel: 'Login',
                    title: 'Login',
                    drawerIcon: () => (
                        <Entypo name="login" size={24} color={CustomColors.primary} />
                    )
                }}
            />
        </Drawer.Navigator>
    );
}


//Stacks Navigation
const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName='Welcome'
        >
            <Stack.Screen
                name='Welcome'
                component={MyDrawer}
                options={{
                    headerShown: false
                }}
            />
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


//Tabs Navigation
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
//                 component={MyStack}
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
//                 component={Login}
//                 options={{
//                     tabBarLabel: 'Login',
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
                {/* <AppBar /> */}
                {/* <MyDrawer /> */}
                {/* <MyTabs /> */}
                <MyStack />
            </NavigationContainer>
        </AppProvider>
    )
}