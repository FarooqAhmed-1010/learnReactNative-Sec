import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    },

    countCon:{
        flexDirection:'row',
        alignItems:'center',
    },
    button:{
        backgroundColor:'blue',
        padding:10,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        width:50,
        height:50,
    },
    buttonText:{
        color:'white',
        fontSize:20,
    },
    countText:{
        fontSize:20,
        marginHorizontal:20,
    }
})
export default styles