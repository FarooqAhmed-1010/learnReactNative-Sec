import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Counter.styles'
import {useState} from 'react'
export default function Counter() {

const [count,setCount]=useState(0);
    
    function increament(){ 
        setCount(count+1);
    }
    function decrease(){
        setCount(count-1);
    }




  return (
    <View style={styles.container}>
        {/* a counter - button and + button andnumber in between then */}

        <View style={styles.countCon}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={decrease}>-</Text>
            </TouchableOpacity>

                <Text style={styles.countText}>{count}</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={increament}>+</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}