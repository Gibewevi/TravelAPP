import {StyleSheet, View, TouchableOpacity, Text, TextInput } from "react-native";
import Image from 'react-native-remote-svg';

export default function InputSearchDestination(){
    const styles = StyleSheet.create({
        containerInputSearch:{
           display: 'flex',
           flexDirection: 'row',
           justifyContent:'space-between',
            width:'100%',
            height: 44,
            shadowColor: 'black',
            elevation:10,
            borderColor:'grey',
            backgroundColor:'white',
            borderRadius:20,
            padding:3,
            paddingLeft:10,
            marginTop: 8
        },
        buttonLetsGo:{
        width:100, 
        height:36,
        backgroundColor: '#FF2D00',
        borderRadius:15,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
        }
    });
    
    
    return(
            <View style={styles.containerInputSearch}>

                <View style={{display:'flex', flexDirection:'row',  alignItems:'center', width:'60%'}}>
                    <Image source={ {uri: 'http://10.0.2.2:8081//public/images/homepage/loupe.svg'} }  style={{width:14, height:14}}/>
                    <TextInput color='grey' > Search Destination</TextInput>
                </View>

                <TouchableOpacity style={styles.buttonLetsGo}>
                    <Text style={{color:'white'}}>Let's Go</Text>
                </TouchableOpacity>
            </View>        
        )
}