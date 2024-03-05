import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from '../../../assets/imge/ForgotOtp-imge/arrow-left.svg'
import Start from '../../../assets/imge/ForgotOtp-imge/4.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'
const OTP_Headr = ({navigation}:any) => {
    return (
        <View>
            <View>
                <TouchableOpacity style={{ marginTop: '5%', marginLeft: '5%' }} onPress={() => navigation.navigate('Forgot')}>
                    <Icon height={30} width={30} />
                </TouchableOpacity>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: SCREEN_WIDTH }}>
                <View style={{ alignSelf: 'center', marginLeft: '5%', marginTop: '10%', width: '80%' }}>
                    <Text style={{ fontSize: 25, color: '#1A1C1E', fontWeight: '900' }}>OTP Verification</Text>
                    <Text style={{ color: '#6C7278', fontWeight: '400', fontSize: 14, marginTop: '5%' }}>Please check your email to see the verification code</Text>
                </View>
                <View style={{marginTop:'-5%'}}>
                    <Start />
                </View>
            </View>
        </View>
    )
}

export default OTP_Headr