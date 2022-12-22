import { View, ScrollView, Text, StyleSheet } from "react-native"
import Category from "./Category";
import MyButton from "../Button/MyButton";

export default function HomePageCategory(){

    const styles = StyleSheet.create({
        buttonCategory:{
            backgroundColor:'red',
        }
    });

    return(
        <View>
            <View style={{width:'100%', height:30, display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:15}}>
                <MyButton width={62} height={21} titleSize={10} title='Category' fontWeight={'300'} borderRadius={12}/>
                <Text style={{fontWeight:'400', fontSize:11}}>See all</Text>
            </View>

            <ScrollView horizontal contentContainerStyle={{padding:8, height:136, display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center' }}>
                <Category src={ {uri: 'http://10.0.2.2:8081/public/images/homepage/lake.svg'} } title='Lake' marginLeft={1}/>
                <Category src={ {uri: 'http://10.0.2.2:8081/public/images/homepage/summer.svg'} } title='Beach' />
                <Category src={ {uri: 'http://10.0.2.2:8081/public/images/homepage/mountain.svg'} } title='Mountain' />
                <Category src={ {uri: 'http://10.0.2.2:8081/public/images/homepage/park.svg'} } title='Park' />
                <Category src={ {uri: 'http://10.0.2.2:8081/public/images/homepage/lake.svg'} } title='Lake' />
                <Category src={ {uri: 'http://10.0.2.2:8081/public/images/homepage/summer.svg'} } title='Beach' />
                <Category src={ {uri: 'http://10.0.2.2:8081/public/images/homepage/mountain.svg'} } title='Mountain' />
                <Category src={ {uri: 'http://10.0.2.2:8081/public/images/homepage/park.svg'} } title='Park' />
            </ScrollView>
        </View>
        )
}