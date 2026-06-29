import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons  from '@expo/vector-icons/Ionicons'

/***
 * title: String,
 * onPress: () => void,
 * showIcon: boolean,
 * icon: string,
 * iconColor: string,
 * iconSize: number,
 * iconFamily: string,
 */


export const Button = ({
    title,
    onPress,
    showIcon =false,
    icon="",
    iconColor="white",
    iconSize=20 ,
    iconFamily="Ionicons",
}) => {

        return (
            <View>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Ionicons name={icon} color={iconColor} size={iconSize}  />
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
            </View>
        );

}


const styles = StyleSheet.create({
    button: {
    backgroundColor: 'rgb(49, 239, 214)',
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
  }, 

  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',

  },

})