import { View, Animated, Easing } from 'react-native';
import React, { useEffect } from 'react';
import Font from '../../assets/imge/Splas-imge/rentifiy 1.svg';

const Splas = () => {
    const rotationValue = new Animated.Value(0);
    const scaleValue = new Animated.Value(1);
    const fontOpacity = new Animated.Value(0);

    useEffect(() => {
        Animated.parallel([
            Animated.timing(rotationValue, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true
            }),
            Animated.timing(scaleValue, {
                toValue: 0.3,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true
            })
        ]).start(() => {
            // Start the font animation 2 seconds after the square animation ends
            setTimeout(startFontAnimation, 2000);
        });
    }, []);

    const startFontAnimation = () => {
        Animated.timing(fontOpacity, {
            toValue: 1,
            duration: 5000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start();
    };

    const rotate = rotationValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    return (
        <View style={{ backgroundColor: '#323232', flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Animated.View style={{
                height: 80,
                width: 80,
                backgroundColor: '#F4B755',
                borderRadius: 20,
                transform: [{ rotate }, { scale: scaleValue }]
            }}>
            </Animated.View>
            <Font style={{ opacity: fontOpacity }} />
        </View>
    );
};

export default Splas;
