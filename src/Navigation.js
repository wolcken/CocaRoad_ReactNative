import React from 'react';
import { AppProvider } from './context/AppContext';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CustonDrawer from './components/CustonDrawer';

//Screens Public
import Login from './screens/Login';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';
import CustomColors from './stylus/colors';
import Adepcoca from './screens/Adepcoca';
import Sacaba from './screens/Sacaba';
import Minorista from './screens/Minorista';

//Screens Admin
import Create from './admin/Create';
import Manage from './admin/Manage';

//icons
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import Testing from './screens/Testing';
import Delete from './admin/Delete';
import Edit from './admin/Edit';
import EditPrices from './admin/EditPrices';

//Drawers navigation
const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustonDrawer {...props} />}
            initialRouteName='Welcome'
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
                    color: CustomColors.primary,
                    marginLeft: -20
                }
            }}
        >
            <Drawer.Screen
                name="Welcome"
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
                component={Adepcoca}
                options={{
                    drawerLabel: 'Adepcoca',
                    title: 'Adepcoca',
                    drawerIcon: () => (
                        <FontAwesome5 name="money-bill-wave" size={20} color={CustomColors.primary} />)
                }}
            />
            <Drawer.Screen
                name="Sacaba"
                component={Sacaba}
                options={{
                    drawerLabel: 'Sacaba',
                    title: 'Sacaba',
                    drawerIcon: () => (
                        <FontAwesome5 name="money-bill-wave" size={20} color={CustomColors.primary} />)
                }}
            />
            <Drawer.Screen
                name="Minoristas"
                component={Minorista}
                options={{
                    drawerLabel: 'Minoristas',
                    title: 'Minoristas',
                    drawerIcon: () => (
                        <FontAwesome5 name="money-bill-wave" size={20} color={CustomColors.primary} />
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
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={MyDrawer}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Login'
                component={Login}
                options={{
                    // headerShown: false
                    headerStyle: { backgroundColor: CustomColors.secondary },
                    headerTitleStyle: {color: CustomColors.white}
                }}
            />
            <Stack.Screen
                name='Signup'
                component={Signup}
                options={{
                    // headerShown: false
                    headerStyle: { backgroundColor: CustomColors.secondary },
                    headerTitleStyle: {color: CustomColors.white}
                }}
            />
            <Stack.Screen
                name='Manage'
                component={Manage}
                options={{
                    // headerShown: false
                    headerStyle: { backgroundColor: CustomColors.secondary },
                    headerTitleStyle: {color: CustomColors.white}
                }}
            />
            <Stack.Screen
                name='Create'
                component={Create}
                options={{
                    // headerShown: false
                    headerStyle: { backgroundColor: CustomColors.secondary },
                    headerTitleStyle: {color: CustomColors.white}
                }}
            />
            <Stack.Screen
                name='Delete'
                component={Delete}
                options={{
                    // headerShown: false
                    headerStyle: { backgroundColor: CustomColors.secondary },
                    headerTitleStyle: {color: CustomColors.white}
                }}
            />
            <Stack.Screen
                name='Edit'
                component={Edit}
                options={{
                    // headerShown: false,
                    headerStyle: { backgroundColor: CustomColors.secondary },
                    headerTitleStyle: {color: CustomColors.white}
                }}
            />
            <Stack.Screen
                name='EditPrices'
                component={EditPrices}
                options={{
                    // headerShown: false
                    headerStyle: { backgroundColor: CustomColors.secondary },
                    headerTitleStyle: {color: CustomColors.white}
                }}
            />
            <Stack.Screen
                name='Test'
                component={Testing}
                options={{
                    // headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default function Navigation() {
    return (
        <AppProvider>
            <NavigationContainer>
                <MyStack />
            </NavigationContainer>
        </AppProvider>
    )
}