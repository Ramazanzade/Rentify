import { View, Text, TextInput, Animated, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Eye from '../../../assets/imge/Login-imge/eye.svg'
import IsEye from '../../../assets/imge/Login-imge/eye-slash.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'
const Register_Input = ({ setloading, navigation }: any) => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [paswword, setpaswword] = useState('')
    const [confrimpaswword, setconfrimpaswword] = useState('')
    const [show, setshow] = useState(false)
    const [hideText, setHideText] = useState(true);
    const [show1, setshow1] = useState(false)
    const [hideText1, setHideText1] = useState(true);
    const [signInColor, setSignInColor] = useState('#F63D68');
    const [signInColortext, setSignInColortext] = useState('#98A2B3');
    const [buttonOpacity] = useState(new Animated.Value(0));
    useEffect(() => {
        if (paswword.trim() !== '' && email.trim() !== '' && name.trim() !== "" && confrimpaswword.trim() !== '') {
            setSignInColor('#F63D68');
            setSignInColortext('#FCFCFD')
        } else {
            setSignInColor('#F2F4F7');
            setSignInColortext('#98A2B3')
        }
    }, [email, paswword, name, confrimpaswword]);
    const Login = () => {
        if (paswword.trim() !== '' && email.trim() !== '' && name.trim() !== "", confrimpaswword.trim() !== '') {
            setloading(true)
            setTimeout(() => {
                setloading(false)
                navigation.navigate('LoginScreen')

            }, 3000);
        } else {
        }
    }
    const presshow = () => {
        setshow(!show)
        setHideText(!hideText);
    }
    const presshow1 = () => {
        setshow1(!show1)
        setHideText1(!hideText1);
    }
    return (
        <View>
            <View style={{ position: 'relative', width: SCREEN_WIDTH - 30, alignSelf: 'center' }}>
                <Text style={{ position: 'absolute', top: -12, left: 20, zIndex: 1, backgroundColor: 'white', paddingHorizontal: 5, fontSize: 11, color: 'rgba(172, 181, 187, 1)' }}>
                    Full Name
                </Text>
                <TextInput
                    onChangeText={setname}
                    value={name}
                    placeholder='Enter your email or number'
                    style={{ borderWidth: 1, borderColor: '#DCE4E8', borderRadius: 50, width: '100%', alignSelf: 'center', textAlign: 'left', paddingLeft: 25, fontSize: 12, color: '#ACB5BB', padding: '5%' }}
                    placeholderTextColor='#ACB5BB'
                />
            </View>
            <View style={{ position: 'relative', width: SCREEN_WIDTH - 30, alignSelf: 'center', marginVertical: '7%' }}>
                <Text style={{ position: 'absolute', top: -12, left: 20, zIndex: 1, backgroundColor: 'white', paddingHorizontal: 5, fontSize: 11, color: 'rgba(172, 181, 187, 1)' }}>
                    Email
                </Text>
                <TextInput
                    onChangeText={setemail}
                    value={email}
                    placeholder='Enter your email or number'
                    style={{ borderWidth: 1, borderColor: '#DCE4E8', borderRadius: 50, width: SCREEN_WIDTH - 30, alignSelf: 'center', textAlign: 'left', paddingLeft: 25, fontSize: 12, color: '#ACB5BB', padding: '4%' }}
                    placeholderTextColor='#ACB5BB'
                />
            </View>
            <View style={{ position: 'relative', width: SCREEN_WIDTH - 30, alignSelf: 'center', }}>
                <Text style={{ position: 'absolute', top: -12, left: 20, zIndex: 1, backgroundColor: 'white', paddingHorizontal: 5, fontSize: 11, color: 'rgba(172, 181, 187, 1)' }}>
                    Password
                </Text>
                <TextInput
                    onChangeText={setpaswword}
                    value={hideText ? paswword.replace(/./g, '*') : paswword}
                    placeholder='Enter your password'
                    style={{ borderWidth: 1, borderColor: '#DCE4E8', borderRadius: 50, width: SCREEN_WIDTH - 30, alignSelf: 'center', textAlign: 'left', paddingLeft: 25, fontSize: 12, color: '#ACB5BB', padding: '4%' }}
                    placeholderTextColor='#ACB5BB'
                />
                <View style={{ position: 'absolute', zIndex: 1, alignItems: 'flex-end', marginTop: '5%', alignSelf: 'flex-end', paddingRight: '28%' }}>
                    <TouchableOpacity onPress={presshow} style={{}}>
                        {show ? (
                            <Eye />
                        ) : (
                            <IsEye />
                        )}
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ position: 'relative', width: SCREEN_WIDTH - 30, alignSelf: 'center', marginTop: '7%' }}>
                <Text style={{ position: 'absolute', top: -12, left: 20, zIndex: 1, backgroundColor: 'white', paddingHorizontal: 5, fontSize: 11, color: 'rgba(172, 181, 187, 1)' }}>
                    Confirm  Password
                </Text>
                <TextInput
                    onChangeText={setconfrimpaswword}
                    value={hideText1 ? confrimpaswword.replace(/./g, '*') : confrimpaswword}
                    placeholder='Enter your password'
                    style={{ borderWidth: 1, borderColor: '#DCE4E8', borderRadius: 50, width: SCREEN_WIDTH - 30, alignSelf: 'center', textAlign: 'left', paddingLeft: 25, fontSize: 12, color: '#ACB5BB', padding: '4%' }}
                    placeholderTextColor='#ACB5BB'
                />
                <View style={{ position: 'absolute', zIndex: 1, alignItems: 'flex-end', marginTop: '5%', alignSelf: 'flex-end', paddingRight: '28%' }}>
                    <TouchableOpacity onPress={presshow1} style={{}}>
                        {show1 ? (
                            <Eye />
                        ) : (
                            <IsEye />
                        )}
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ alignSelf: 'center', marginTop: '7%' }}>
                <TouchableOpacity style={{ backgroundColor: signInColor, borderRadius: 50, width: SCREEN_WIDTH - 30, alignSelf: 'center', padding: '4%' }} onPress={Login}>
                    <Text style={{ textAlign: 'center', fontSize: 15, color: signInColortext, fontWeight: '500' }}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Register_Input