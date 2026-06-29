import { View, Text } from 'react-native'
import React from 'react'
import styles from './Home.styles'
import { useRoute } from '@react-navigation/native';
import { MotiView } from 'moti';
import { Ionicons } from '@expo/vector-icons';

    export default function Home() {
        const route = useRoute();
        const {email} = route.params ?? {};
        return(
            <View style={styles.container}>
            <MotiView
            from={{opacity:0, translateY: 40,}}
            animate={{opacity:1, translateY: 0,}}
            transition={{type: 'timing', duration: 800,}}
            />
            <MotiView
            animate={{scale:[1,1.35,1]}}
            transition={{ loop: true, type: 'timing', duration: 600,}}
            >
            <Ionicons name="heart" size={120} color="black" />
            </MotiView>
            <MotiView
            from={{opacity:0, scale:0.5,}}
            animate={{opacity:1, scale:1,}}
            transition={{type: 'spring', duration: 1000,delay:500,}}
            >
            <Text style={styles.item}>{email}</Text>
            </MotiView>
            </View>
    );

}
