import { StyleSheet, View, Text } from "react-native";
import MyButton from "../Button/MyButton";

export default function PaymentFooter(props){

    const styles = StyleSheet.create({
        container:{
            width:'100%',
            height: 81,
            position: 'absolute',
            bottom: 0,  
            borderColor:'black',
            backgroundColor:'white',
            shadowColor: 'black',
            elevation:20,

        },
        price:{
            fontSize:18,
            fontWeight:'600',
            color:'black'
        },
        containerContent:{
            width:'100%',
            height: 81,
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            flexDirection:'row',    
            padding:20
        }
    });

    return(
            <View style={styles.container}>
                <View style={styles.containerContent}>
                    <Text style={styles.price}>{props.price}</Text>
                    <MyButton title="Book A Trip" width={156} height={40} borderRadius={25} fontWeight={'500'} functionOnPress={()=>props.navigation.navigate('Payment')}/>
                </View>
            </View>
        )
}