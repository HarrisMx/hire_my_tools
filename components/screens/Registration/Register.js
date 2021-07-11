import React from 'react'
import {
    StyleSheet , 
    View ,
    Text,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

const Register = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topHeader}>
                <View >
                    <Image style={styles.loginImage} source={require('../../assets/img/login-img.png')}/>
                </View>
                <View style={{elevation:3}}>
                    <Text style={styles.header}>Login</Text>
                </View>
            </View>
            <View style={styles.formContent}>
                <TextInput style={styles.textInput} placeholder="Full Name" underlineColorAndroid={'transparent'}/>
                <TextInput style={styles.textInput} placeholder="Email" underlineColorAndroid={'transparent'}/>
                <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} underlineColorAndroid={'transparent'}/>
                <TextInput style={styles.textInput} placeholder="Confirm Password" secureTextEntry={true} underlineColorAndroid={'transparent'}/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <Text style={styles.gotoReg}>Have an account?, sigin.</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topHeader: {
        paddingLeft: 60,
        paddingRight: 60,
        flex: 2,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContent:{
        paddingLeft: 60,
        paddingRight: 60,
        paddingTop: 70,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 60,
        flex:3
    },
    Login: {
        alignSelf: 'stretch'
    },
    header: {
        fontSize: 18,
        color: '#ffffff',
        textTransform: 'uppercase'
    },
    textInput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#F52081',
        borderBottomColor: '#2151FF',
        borderBottomWidth:1
    },
    button: {
        backgroundColor: '#F52081',
        alignSelf: 'stretch',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    buttonText:{
        color: '#ffffff',
        textTransform: 'uppercase'
    },
    gotoReg: {
        fontSize: 12,
        color: '#2151FF',
        paddingTop: 10,
        alignSelf: 'flex-end'
    },
    loginImage: {
        width: 90,
        resizeMode: 'contain'
    }
});

export default Register;