import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../../../Container/Register/Register';
const Stack = createNativeStackNavigator();
const RegisterScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

export default RegisterScreen