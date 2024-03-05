import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../../Container/Login/Login';
const Stack = createNativeStackNavigator();
const LoginScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default LoginScreen