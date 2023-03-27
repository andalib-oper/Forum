import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const CustomHeader = (props) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={props.backButton}>
            <AntDesign name='left' size={26} color={'#ef7e46'} style={styles.icon}/>
        </TouchableOpacity>
        <Text style={styles.headerName}>{props.headerName}</Text>
        {props.rightbutton?
        <TouchableOpacity style={styles.backButton}>
           <Image source={require('../Images/filterButton.png')} style={styles.icon}/>
        </TouchableOpacity>
        :
        null
    }
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignSelf:'flex-start',
        padding:10,
        margin:10
    },
    backButton:{
        height:50,
        width:50,
        borderRadius:100/2,
        elevation:10,
        backgroundColor:'#fff',
        justifyContent:'center'
    },
    icon:{
        alignSelf:'center'
    },
    headerName:{
        alignSelf:'center',
        fontSize:22,
        fontWeight:'bold',
        color:'#000',
        width:'73%',
        textAlign:'center',
    }
})