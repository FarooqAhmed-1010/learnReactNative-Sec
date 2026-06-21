import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './Register.styles'
import ConfettiCannon from 'react-native-confetti-cannon';


export default function Register() {
  const confettiRef = React.useRef(null);

  function onRegisterPressed() {

  if(confettiRef.current){
    confettiRef.current.start();
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonCon} onPress={onRegisterPressed}>
        <Text style={styles.buttonText}>Go to Login</Text>
      </TouchableOpacity>

      
      <ConfettiCannon 
      colors={["#ffffff", "#009f00", "#00ffff", "#ff0000", "#ff00ff", "#ffff00"]}
      count={200} origin={{x: -10, y: 0}}
      autoStart={true}
      ref={confettiRef}
      /> 

    </View>
  )
}