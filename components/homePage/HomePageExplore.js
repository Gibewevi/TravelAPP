import { View, FlatList } from "react-native";
import Travel from "./Travel";
import { useState, useContext } from "react";
import { APIcontext } from "../context/APIcontext";

export default function HomePageExplore({navigation}){
    const {travelDataAPI, travelID} = useContext(APIcontext);

    return(
            
               <FlatList
                data={travelDataAPI}
                renderItem={({ item }) => 
                    <Travel src={item.urlImage} title={item.title} locate={item.locate} rating={item.rating} navigation={navigation} id={item.id} titleFontSize={14} detailsFontSize={8} locateIconWidth={12} locateIconHeight={14} iconRatingWidth={17} iconRatingHeight={16}/>
                }
                keyExtractor={item => item.id}
                />
            
        )
}