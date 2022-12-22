import { View, Text, StyleSheet } from "react-native"
import InputSearchDestination from "./InputSarchDestination";

export default function HomePageSearch(){

    return(
                <View style={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', marginTop:5}}>
                    <Text style={{fontSize:10, fontWeight:'800'}}>
                        Hello Max,
                    </Text>
                    <Text style={{fontSize:10, fontWeight:'400'}}>
                        Good Morning
                    </Text>
                    <View style={{display:'flex', flexDirection:'row', width:'70%'}}>
                        <Text style={{color:'red', fontSize:32, fontWeight:'600', letterSpacing:2}}>Where <Text style={{color:'black'}}>do you wanna go ?</Text></Text>
                    </View>

                    <InputSearchDestination />
                </View>
        )
}