import { StyleSheet, View, Button, Text, ImageBackground } from "react-native"
import { APIcontext } from "../context/APIcontext";
import { useContext } from "react";
import HeaderTravelDescription from "../homePage/HeaderTravelDescription";
import Activitie from "./Activitie";
import PaymentFooter from "./PaymentFooter";

export default function Page_3({ route, navigation }){

    const {travelDataAPI, travelID} = useContext(APIcontext);

    const styles = StyleSheet.create({
        container:{
            width:'100%',
            height:'100%',
            display:'flex',
            flexDirection:'column',
            backgroundColor:'white'
        },
        title:{
            fontWeight:'600',
            fontSize:40
        },
        travelImage:{
            width:'100%',
            height:'50%',
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,             
            shadowColor: 'black',
            elevation:10, 
            overflow:'hidden'
        },
        containerDetails:{
            width:'100%',
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center'
        }
    })

   
    const { id } = route.params;

return(
        <View style={styles.container}>

            {/* Background Image */}
            <View style={styles.travelImage}>
              <ImageBackground source={{uri: travelDataAPI[travelID].urlImage}} style={{width:'100%', height:'100%'}}>
                
              </ImageBackground>
            </View>


            {/* Details */}
            <View style={{padding:20, height:'42%', justifyContent:'space-evenly'}}>
              <HeaderTravelDescription title={travelDataAPI[travelID].title} locate={travelDataAPI[travelID].locate} rating={travelDataAPI[travelID].rating} titleFontSize={24} titleFontWeight={'700'} detailsFontSize={9} locateIconWidth={16} locateIconHeight={17} iconRatingWidth={17} iconRatingHeight={16}/>
              <View >
                <Text style={{fontSize:16, fontWeight:'500', color:'black'}}>Description</Text>
                <Text style={{marginTop:5, fontSize:13, fontWeight:'200', color:'black'}}>Lorem ipsum dolor sit amet, consectetur ngdtf adipiscing elit. Est vel odio elementum non id  gvenenatis, elementum. Enim augue velit tristique eu viverra. Massa.Est  odio elementum ...See More</Text>
              </View>

              <View >
                <Text style={{fontSize:16, fontWeight:'500', color:'black'}}>Activities</Text>
                <View style={{width:'100%', flexWrap:'wrap', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop:5}}>
                    <Activitie activitie={'Camping'} />
                    <Activitie activitie={'Camping'} />
                    <Activitie activitie={'Camping'} />
                    <Activitie activitie={'Camping'} />
                    <Activitie activitie={'Camping'} />
                </View>
              </View>
            </View>

            {/* Footer */}
            <PaymentFooter price={travelDataAPI[travelID].price} width={156} navigation={navigation}/>

        </View>
    )
}