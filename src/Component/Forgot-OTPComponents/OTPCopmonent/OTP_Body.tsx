// // import { View, Text, Modal, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
// // import React, { useState, useEffect, useRef } from 'react'
// // import OTP_Time from './OTP_Time';
// // import { SCREEN_WIDTH } from '../../../Utils/common';
// // import LoadingPage from '../../../Contance/Loading-Page/LoadingPage';

// // const OTP_Body = ({ navigation }: any) => {
// //     const [code, setCode] = useState({
// //         digit1: '',
// //         digit2: '',
// //         digit3: '',
// //         digit4: '',
// //     });
// //     const input1Ref = useRef(null);
// //     const input2Ref = useRef(null);
// //     const input3Ref = useRef(null);
// //     const input4Ref = useRef(null);
// //     const [loading, setlodaing] = useState(false)
// //     const handleContentSizeChange = ({ nativeEvent: { contentSize } }: any) => {
// //         const inputHeight = contentSize.height;
// //         const fontSize = inputHeight / 2;
// //         setInputStyle({ ...inputStyle, fontSize });
// //     };

// //     const [inputStyle, setInputStyle] = useState({
// //         height: 80,
// //         fontSize: 20,
// //         width: 80,
// //     })

// //     const handleCodeChange = (key: any, value: string) => {
// //         setCode((prevCode) => ({ ...prevCode, [key]: value }));
// //     };
// //     const focusNextInput = (nextInput: any) => {
// //         nextInput.current.focus();
// //     };

// //     const Verify = () => {
// //         // const { digit1, digit2, digit3, digit4 } = code;
// //         // const enteredCode = `${digit1}${digit2}${digit3}${digit4}`;
// //         // if (enteredCode === "1111") {
// //         //     navigation.navigate('Tabbar', {
// //         //         screen: 'Home',
// //         //         params: {}
// //         //     })

// //         // }
// //         setlodaing(true)
// //         setTimeout(()=>{
// //             setlodaing(false)
// //             navigation.navigate('NewPassword')
// //         }, 3000)
// //     }
// //     return (
// //         <View style={{flex:1}}>
// //             <Modal
// //                 animationType="slide"
// //                 transparent={true}
// //                 visible={loading}
// //             >
// //                 <LoadingPage />
// //             </Modal>
// //             <View style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
// //                 <View>
// //                     <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', width: SCREEN_WIDTH - 20, marginTop: '10%' }}>
// //                         <TextInput
// //                             ref={input1Ref}
// //                             keyboardType="numeric"
// //                             maxLength={1}
// //                             onContentSizeChange={handleContentSizeChange}
// //                             onChangeText={(value) => { handleCodeChange('digit1', value); focusNextInput(input2Ref) }}
// //                             multiline
// //                             style={{
// //                                 width: 80,
// //                                 height: 69,
// //                                 borderRadius: 100,
// //                                 textAlign: 'left',
// //                                 paddingLeft: 35,
// //                                 color: 'rgba(26, 28, 30, 1)',
// //                                 borderWidth: 1,
// //                                 borderColor: '#DCE4E8',
// //                                 fontSize: 20,
// //                                 fontWeight: '700'
// //                             }}
// //                         />
// //                         <TextInput
// //                             keyboardType="numeric"
// //                             maxLength={1}
// //                             ref={input2Ref}
// //                             onChangeText={(value) => { handleCodeChange('digit2', value); focusNextInput(input3Ref) }}
// //                             style={{
// //                                 width: 80,
// //                                 height: 69,
// //                                 borderRadius: 100,
// //                                 textAlign: 'left',
// //                                 paddingLeft: 35,
// //                                 color: 'rgba(26, 28, 30, 1)',
// //                                 borderWidth: 1,
// //                                 borderColor: '#DCE4E8',
// //                                 fontSize: 20,
// //                                 fontWeight: '700'
// //                             }}
// //                         />
// //                         <TextInput
// //                             keyboardType="numeric"
// //                             maxLength={1}
// //                             ref={input3Ref}
// //                             onChangeText={(value) => { handleCodeChange('digit3', value); focusNextInput(input4Ref) }}
// //                             style={{
// //                                 width: 80,
// //                                 height: 69,
// //                                 borderRadius: 100,
// //                                 textAlign: 'left',
// //                                 paddingLeft: 35,
// //                                 color: 'rgba(26, 28, 30, 1)',
// //                                 borderWidth: 1,
// //                                 borderColor: '#DCE4E8',
// //                                 fontSize: 20,
// //                                 fontWeight: '700'
// //                             }}
// //                         />
// //                         <TextInput
// //                             keyboardType="numeric"
// //                             maxLength={1}
// //                             ref={input4Ref}
// //                             onChangeText={(value) => handleCodeChange('digit4', value)}
// //                             style={{
// //                                 width: 80,
// //                                 height: 69,
// //                                 borderRadius: 100,
// //                                 textAlign: 'left',
// //                                 paddingLeft: 35,
// //                                 color: 'rgba(26, 28, 30, 1)',
// //                                 borderWidth: 1,
// //                                 borderColor: '#DCE4E8',
// //                                 fontSize: 20,
// //                                 fontWeight: '700',
// //                             }}
// //                         />
// //                     </View>
// //                     <View>
// //                         <OTP_Time />
// //                     </View>
// //                 </View>
// //                 <View style={{ marginBottom: '10%' }}>
// //                     <TouchableOpacity style={{ backgroundColor: '#F63D68', borderRadius: 50, width: SCREEN_WIDTH - 30, alignSelf: 'center', padding: '4%' }} onPress={() => Verify()}>
// //                         <Text style={{ textAlign: 'center', fontSize: 15, color: '#F2F4F7', fontWeight: '500' }}>Verify</Text>
// //                     </TouchableOpacity>
// //                 </View>
// //             </View>
// //         </View>
// //     )
// // }

// // export default OTP_Body




// import React, { useState, useRef } from 'react';
// import { View, TextInput, StyleSheet, Text } from 'react-native';

// const OTPInput = ({ numInputs }:any) => {
//   const [otp, setOTP] = useState(Array(numInputs).fill(''));
//   const inputRefs = useRef<any>([]);

//   const handleChange = (index:any, value:any) => {
//     const newOTP = [...otp];
//     newOTP[index] = value;
//     setOTP(newOTP);

//     if (index < numInputs - 1 && value !== '') {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   const handleKeyPress = (index:any, key:any) => {
//     if (key === 'Backspace' && index !== 0 && otp[index] === '') {
//       inputRefs.current[index - 1].focus();
//     }
//   };

//   const renderInputs = () => {
//     const inputs = [];
//     for (let i = 0; i < numInputs; i++) {
//       inputs.push(
//         <TextInput
//           key={i}
//           style={styles.input}
//           keyboardType="numeric"
//           maxLength={1}
//           onChangeText={(value) => handleChange(i, value)}
//           onKeyPress={({ nativeEvent: { key } }) => handleKeyPress(i, key)}
//           ref={(ref) => (inputRefs.current[i] = ref)}
//           value={otp[i]}
//         />
//       );
//     }
//     return inputs;
//   };

//   return <View style={styles.container}>
//     <Text>Salam</Text>
//     {renderInputs()}</View>;
// };

// const styles = StyleSheet.create({
//   container: {

//   },
//   input: {
//     width: 40,
//     height: 40,
//     borderWidth: 1,
//     borderRadius: 5,
//     margin: 5,
//     textAlign: 'center',
//     backgroundColor:'green'
//   },
// });

// export default OTPInput;

