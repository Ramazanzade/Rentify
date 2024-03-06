// import { View, Animated, Easing } from 'react-native';
// import React, { useEffect } from 'react';
// import Font from '../../assets/imge/Splas-imge/rentifiy 1.svg';

// const Splas = () => {
//     const rotationValue = new Animated.Value(0);
//     const scaleValue = new Animated.Value(1);

//     useEffect(() => {
//         Animated.parallel([
//             Animated.timing(rotationValue, {
//                 toValue: 1,
//                 duration: 1000,
//                 easing: Easing.linear,
//                 useNativeDriver: true
//             }),
//             Animated.timing(scaleValue, {
//                 toValue: 0.3,
//                 duration: 1000,
//                 easing: Easing.linear,
//                 useNativeDriver: true
//             })
//         ]).start();
//     }, []);


//     const rotate = rotationValue.interpolate({
//         inputRange: [0, 1],
//         outputRange: ['0deg', '360deg']
//     });

//     return (
//         <View style={{ backgroundColor: '#323232', flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
//             <Font />
//             <Animated.View style={{
//                 height: 80,
//                 width: 80,
//                 backgroundColor: '#F4B755',
//                 borderRadius: 20,
//                 transform: [{ rotate }, { scale: scaleValue }]
//             }}>
//             </Animated.View>
//         </View>
//     );
// };

// export default Splas;



import React, { useEffect, useRef, useState } from 'react';
import { View, Animated, Easing, Text, StyleSheet } from 'react-native';
const Splas = () => {
  const animatedValues = useRef(Array.from({ length: 10 }, () => new Animated.Value(0))).current; 
  const text = "Rentifiy";
  useEffect(() => {
    const animations = text.split('').map((_, index) => {
      return Animated.timing(animatedValues[index], {
        toValue: 1,
        duration: 500,
        delay: index * 100, 
        easing: Easing.linear,
        useNativeDriver: true,
      });
    });

    Animated.stagger(100, animations).start();
  }, []);

  return (
    <View style={{ backgroundColor: '#323232', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View style={{ flexDirection: 'row' }}>
        {text.split('').map((char, index) => (
          <Animated.Text
            key={index}
            style={{
              color: 'green',
              backgroundColor:'#FFFFFF',
              fontSize: 100,
              opacity: animatedValues[index],
              fontFamily:'Dragrace',
              transform: [
                {
                  translateX: animatedValues[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [-20, 0],
                  }),
                },
              ],
            }}>
            {char}
          </Animated.Text>
        ))}
      
      </Animated.View>
      <Text style={styles.text}>Salam</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    fontFamily: 'Dragrace',
    fontSize: 100,
  },
});

export default Splas;



