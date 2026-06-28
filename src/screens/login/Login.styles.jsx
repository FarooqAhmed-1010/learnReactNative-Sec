import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  scrollcontainer: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: '#1a1f36',
    padding: 20,
    justifyContent: 'center',
  },

  logo:{
    width: 150, 
    height: 150,
    alignSelf: 'center' ,
    borderRadius: 100,
  },

  title: {
    color: '#fff',
    fontSize: 32,
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#00d4ff',
    color: '#fff',
    padding: 15,
    marginBottom: 15,
  },
    Button: {
    backgroundColor: 'rgb(49, 239, 214)',
    marginTop: 20,
    
  }, 
});