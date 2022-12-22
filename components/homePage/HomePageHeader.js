import { View, Text, StyleSheet, ImageBackground } from "react-native"
import Image from 'react-native-remote-svg';

export default function Header(){
    const styles = StyleSheet.create({
        header:{
            width:'100%',
            height: 41,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        },
        profil:{
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'white',
            borderRadius:21,
            width: 42,
            height: 42,
            shadowColor: 'black',
            elevation:10
        }
    });

    return(
                <View style={styles.header}>
                   <Image source={ {uri: 'http://10.0.2.2:8081/public/images/homepage/group.svg'} } style={{width:16, height:17}}/>
                   <View style={{display:'flex', flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                        <Image source={ {uri: 'http://10.0.2.2:8081/public/images/homepage/vector.svg'} } style={{width:12, height:17}} />
                        <Text style={{fontSize:14, color:'grey', fontWeight:'400', marginLeft:15}}>Texas, US</Text>
                   </View>

                   <View style={styles.profil}>
                        <View style={{width:30, height:30, borderRadius:15, overflow:'hidden'}}>
                            <Image source={ {uri: 'http://10.0.2.2:8081/public/images/homepage/portrait.png'} } style={{width:40, height:40, borderRadius:15}} />
                        </View>
                   </View>
                </View>        
        )
}