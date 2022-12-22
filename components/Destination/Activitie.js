import { View, Text, StyleSheet } from "react-native"

export default function Activitie(props){

    const styles = StyleSheet.create({
        container:{
            width:80,
            backgroundColor:'#DFDFDF', 
            display:'flex', 
            justifyContent:'center', 
            alignItems:'center', 
            borderRadius:10, 
            marginVertical:5,
            padding:3
        }
    });

return(
        <View style={styles.container}>
           <Text style={{fontSize:12, fontWeight:'600', color:'black'}}>{props.activitie}</Text> 
        </View>
    )
}