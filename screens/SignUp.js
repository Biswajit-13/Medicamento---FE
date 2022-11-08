import React, { cloneElement, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar,
  Touchable,
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require("../assets/blood-test.png")} /> */}
      <Image style={{width:"70%",height:100,marginTop:-60,marginBottom:-10,alignSelf:'center'}} source={require("../assets/medicamento_logo.png")} />
      {/* <StatusBar style="auto" /> */}
      <View style={styles.inputView}>
      <MaterialIcons name="email" size={24} style={styles.icon}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
      <MaterialCommunityIcons name="onepassword" size={24} style={styles.icon}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View style={styles.inputView}>
      <MaterialCommunityIcons name="onepassword" size={24} style={styles.icon}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View style={styles.inputView}>
      <MaterialIcons name="local-phone" size={24} style={styles.icon} />
        <TextInput
          style={styles.TextInput}
          placeholder="Mobile Number."
          placeholderTextColor="#003f5c"
        
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View style={styles.inputView}>
      <Fontisto name = "blood-drop"size={24} style={styles.icon} />
        <TextInput
          style={styles.TextInput}
          placeholder="Blood Group"
          placeholderTextColor="#003f5c"
        
          onChangeText={(password) => setPassword(password)}
        />
      </View>



      

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
       

      <TouchableOpacity style={{marginTop:30,alignSelf:'center'}}>
        <Text style={{color:'#FF1493'}}>
            read about our terms and conditions!
        </Text>
      </TouchableOpacity> 

    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      marginTop: StatusBar.cureentHeight,
    },
  
    image: {
      marginBottom: 40,
      width: 100,
      height: 100,
      alignSelf:'center',
      // marginBottom
    },
  
    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "70%",
      height: 50,
      marginBottom: 20,
      borderColor: "red",
      borderWidth: 2,
      alignItems:'center',
      flexDirection:"row",
      // justifyContent:
    },
  
    TextInput: {
      height: 50,
      flex: 1,
      padding: 5,
     
    },
  icon:{
    padding:10,
    color:"#FF1493"
  },
    forgot_button: {
      height: 30,
      marginBottom: 10,
    },
  
    loginBtn: {
      width: "50%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      // marginTop: 10,
      backgroundColor: "#FF1493",
    },
    loginText: {
      color: "white",
    },
  });