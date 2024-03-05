import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splas from '../../../Container/Splas/Splas';
const Stack = createNativeStackNavigator();
const SplasScreen = ({ navigation }: any) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Splas" component={Splas} />
        </Stack.Navigator>
    )
}

export default SplasScreen