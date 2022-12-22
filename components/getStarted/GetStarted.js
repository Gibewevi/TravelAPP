import { StyleSheet, View, Button, Text } from "react-native";
import Image from 'react-native-remote-svg';
import MyButton from "../Button/MyButton";

export default function GetStarted({ navigation }){
    const styles = StyleSheet.create({
        container:{
            width:'100%',
            height:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        },
        background:{
            position:'absolute',
            top:0,
            width:'100%',
            height:588
        },
        getStartedContainer:{
            borderWidth: 1,
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems:'center',
            position:'absolute',
            bottom:0,
            width: '100%',
            height: 230,
            backgroundColor:'white',
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,  
        }
    })

    const nav = () => {
        navigation.navigate('HomePage', {name: 'HomePage'})
    }

return(
        <View style={styles.container}>
            <Image source={ {uri: 'http://10.0.2.2:8081/public/images/getStartedBackground.svg'} } style={styles.background}/>
            <View style={styles.getStartedContainer}>
            <Text style={{fontSize:26, color:'black', fontWeight:'500', letterSpacing:2}}>Escape the Ordinary Life</Text>
                <Text style={{fontSize:16, color:'#464646', fontWeight:'500', letterSpacing:2, textAlign:'center', marginTop:15}}>
                  Discover great experience around you
and maje your life interesting!
                </Text>
                <MyButton title="Get Started" functionOnPress={()=>nav()} width={205} height={45} titleSize={18} fontWeight={'800'} marginTop={15} borderRadius={12}/>
            </View>
        </View>
    )
}