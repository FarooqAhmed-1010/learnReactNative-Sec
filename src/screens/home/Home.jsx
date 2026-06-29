import { View, Text } from 'react-native'
import React from 'react'
import styles from './Home.styles'
import { useRoute } from '@react-navigation/native';

    export default function Home() {
        const route = useRoute();
        const email = route.params?.email;
    return (
        <View style={styles.container}>
            <Text>Welcome, {email}! </Text>
        </View>
    )

}
