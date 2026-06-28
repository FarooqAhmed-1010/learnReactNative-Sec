import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  scrollcontainer: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: '#1a1f36',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo:{
    width: 150, 
    height: 150,
    alignSelf: 'center' ,
    borderRadius: 100,
  },

  label: {
    color: '#fff',
    fontSize: 40,
  },

  form:{
    width: '90%',
  },

  input: {
    borderWidth: 1,
    borderColor: '#00d4ff',
    color: '#fff',
    fontSize:20,
    margin:10,
    borderRadius: 10,
  },

});