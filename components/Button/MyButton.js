import { View, TouchableOpacity, Text, StyleSheet  } from "react-native"

export default function MyButton(props){

    const styles = StyleSheet.create({
        button:{
            width: props.width,
            height: props.height,
            backgroundColor:'#FF2D00',
            borderRadius: props.borderRadius,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: props.marginTop,
            shadowColor: '#FF2D00',
            elevation: 10
        },
        title:{
            fontSize: props.titleSize,
            color:'white', 
            fontWeight: props.fontWeight
        }
    });

    return(
        <TouchableOpacity style={styles.button} onPress={props.functionOnPress}>
          <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
        )
}