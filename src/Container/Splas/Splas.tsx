import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Animated, Image } from 'react-native';
import { SCREEN_WIDTH } from '../../Utils/common';
import LoadingPage from '../../Contance/Loading-Page/LoadingPage';

const Splash = ({ navigation }: any) => {
    const [backgroundColor, setBackgroundColor] = useState('transparent');
    const textOpacity = useRef(new Animated.Value(0)).current;
    const [imgeOpacity] = useState(new Animated.Value(0));
    const [loading, setloading] = useState(false)
    const [nextloading , setnextloading]=useState(false)
    useEffect(() => {
        setTimeout(() => {
            setBackgroundColor('#F63D68');
        }, 1000);

        Animated.timing(textOpacity, {
            toValue: 1,
            duration: 2000,
            delay: 3000,
            useNativeDriver: true,
        }).start();
        Animated.timing(imgeOpacity, {
            toValue: 1,
            duration: 2000,
            delay: 3000,
            useNativeDriver: true,
        }).start();
        setTimeout(() => {
            setloading(true)
        }, 8000);
        setTimeout(() => {
            navigation.navigate('OnboardingScreen')
        }, 13000);
    }, []);
    return (
        <View style={{ flex: 1 }}>
            {
                loading ?
                    (
                        <LoadingPage />
                    ) :
                    (
                        <View style={{ backgroundColor, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Animated.Image
                                style={{
                                    opacity: imgeOpacity,
                                    transform: [{ translateY: textOpacity.interpolate({ inputRange: [0, 1], outputRange: [-200, 0] }) }],
                                    width: SCREEN_WIDTH,
                                }}
                                source={require('../../assets/imge/Splas-imge/2.png')}

                            />
                            <Animated.View style={{ transform: [{ translateY: textOpacity.interpolate({ inputRange: [0, 1], outputRange: [-30, 0] }) }] }}>
                                <Animated.Text style={{ opacity: textOpacity, textAlign: 'center', color: '#FFFFFF', fontSize: 50, fontWeight: '600', }}>
                                    Bloomify.
                                </Animated.Text>
                            </Animated.View>
                            <View>
                                <Animated.Image
                                    style={{
                                        opacity: imgeOpacity,
                                        transform: [{ translateY: textOpacity.interpolate({ inputRange: [0, 1], outputRange: [200, 60] }) }],
                                        alignSelf: 'center'
                                    }}
                                    source={require('../../assets/imge/Splas-imge/4.png')}
                                />
                                <Animated.Image
                                    style={{
                                        opacity: imgeOpacity,
                                        transform: [{ translateY: textOpacity.interpolate({ inputRange: [0, 1], outputRange: [200, 0] }) }],
                                        width: SCREEN_WIDTH
                                    }}
                                    source={require('../../assets/imge/Splas-imge/3.png')}
                                />
                            </View>
                        </View>
                    )
            }
        </View>
    );
};

export default Splash;
