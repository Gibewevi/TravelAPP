import { StyleSheet, View, Button, Text, FlatList } from "react-native"
import HomePageHeader from './HomePageHeader.js';
import HomePageSearch from "./HomePageSearch.js";
import HomePageCategory from "./HomePageCategory.js";

import Item from '../Item.js';
import HomePageExplore from "./HomePageExplore.js";

export default function HomePage({ navigation }){
    const styles = StyleSheet.create({
        container:{
            width:'100%',
            height:'100%',
            backgroundColor:'white',
            borderWidth:1,
            paddingTop:0,
            padding:10
        },

    })
return(
        <View style={styles.container}>
            <HomePageHeader />
            <HomePageSearch />
            <HomePageCategory />
            <HomePageExplore navigation={navigation} />
        </View>
    )
}
