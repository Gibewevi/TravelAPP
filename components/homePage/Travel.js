import { View, TouchableOpacity, StyleSheet, ImageBackground, Text } from "react-native";
import Image from 'react-native-remote-svg';
import HeaderTravelDescription from "./HeaderTravelDescription";
import { APIcontext } from "../context/APIcontext";
import { useContext } from "react";

export default function Travel(props){

    const {setTravelID} = useContext(APIcontext);


const styles = StyleSheet.create({
    container: {
        width: props.width || '100%', 
        height:200,
        backgroundColor: 'white',
        borderRadius:10,
        display:'flex',
        justifyContent:'space-between', 
        alignItems:'center',
        padding:13,
        marginTop:10,
        borderWidth:1,
        borderColor:'#EDEEEF'
    },
    image:{
        width:'100%',
        height: 123,
        backgroundColor: 'white',
        borderRadius:10,
        shadowColor: 'black',
        elevation:10,
        borderRadius:10,
        overflow:'hidden',
        marginBottom:13
    },
    containerDetailsTravel:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        width:'100%',
    },
    title:{
        fontWeight:'400',
        color:'black',
        fontSize:14    
    },
    details:{
        fontWeight:'400',
        color:'black',
        fontSize:8,
        marginLeft:5    
    }
});


const setTravelIDAndNavigateToTravel = () => {
    setTravelID(props.id);
    props.navigation.navigate('Destination', {id: props.id});
}

    return(
            <TouchableOpacity style={styles.container} onPress={()=>setTravelIDAndNavigateToTravel()}>
                <View style={styles.image}>
                    <ImageBackground source={{uri: props.src}} style={{width:'100%', height:'100%'}} />
                </View>

            <HeaderTravelDescription title={props.title} locate={props.locate} rating={props.rating} titleFontSize={props.titleFontSize} titleFontWeight={props.titleFontWeight} detailsFontSize={props.detailsFontSize} locateIconWidth={props.locateIconWidth} locateIconHeight={props.locateIconHeight} iconRatingWidth={props.iconRatingWidth} iconRatingHeight={props.iconRatingHeight}/>

            </TouchableOpacity>
        )
}