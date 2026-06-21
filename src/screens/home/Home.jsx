import { View, Text,FlatList,Image } from 'react-native'
import React from 'react'
import styles from './Home.styles'
import people from "./data"

    export default function Home() {
        const [onlineData, setOnlineData] = React.useState([]);
        fetch("https://api.github.com/users")
        .then((res)=>res.json())
        .then((data)=>setOnlineData(data))
        .catch((err)=>console.log(err))
        const _renderItem = ({ item }) => (
            <View style={styles.itemCon}>
                <Image style={styles.itemImage}
                source ={{
                    uri: item.avatar_url
                }}
                />
                <Text style={styles.item}>{item.login}</Text>
    
            </View>
        );
    return (
        <View style={styles.container}>
            <FlatList
                data={onlineData}
                renderItem={_renderItem}
            />
        </View>
    )

}
