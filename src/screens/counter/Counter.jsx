import { View, Text } from 'react-native'
import React from 'react'
import styles from './Counter.styles'
import {useState} from 'react'
import { Button } from '../../components';
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
            <Button title="" onPress={decrease} icon="remove" />

            <Text style={styles.countText}>{count}</Text>

            <Button title="" onPress={increament} icon="add" />
 
        </View>
    </View>
  )
}