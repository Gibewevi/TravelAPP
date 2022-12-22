import { View, StyleSheet} from "react-native";
import Image from 'react-native-remote-svg';
import { Text } from "react-native";

export default function Category(props){
    const src = props.src;

    const styles = StyleSheet.create({
        containerThumbnail:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center', 
        height:100,
        padding:8,
        marginLeft: props.marginLeft ? props.marginLeft : 20,
        backgroundColor:'white',
        borderRadius:10,
        shadowColor: 'black',
        elevation:10,
        },
        icon:{
            width:75,
            height:75,
            borderRadius:7
        },
        titleCategory:{
            fontSize:12,
            alignSelf:'center',
            marginTop:1
        }
    });
    return(
            <View style={styles.containerThumbnail}>
                  <Image source={src} style={styles.icon} />
                  <Text style={styles.title}>{props.title}</Text>
            </View>
        )
}