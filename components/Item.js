import { View, Text, TouchableOpacity } from "react-native"

export default function Details(props){
return(
        <TouchableOpacity style={{backgroundColor:'red', marginBottom:10}} onPress={()=>props.navigation.navigate('Page_3')}>
            <Text>PseudoTEST</Text>
            <Text>{props.title}</Text>
        </TouchableOpacity>
    )
}