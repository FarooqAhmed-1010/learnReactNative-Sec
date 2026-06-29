import { View, Image, Text, TextInput,ScrollView} from 'react-native';
import { styles } from './Login.styles';
import { useState } from "react"
import { Button } from '../../components';
import { useNavigation } from '@react-navigation/native';

export default function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const navigation = useNavigation();
  function onLoginPressed() {
    const error=
      (!email && "please enter email") ||
      (!password && "please enter password") ||
      (!email.includes("@") && "please enter valid email");
    if(error) return alert(error);
    setIsValid(true);
    navigation.navigate("Home",{email});
  }

  return (
    
   <ScrollView contentContainerStyle={styles.scrollcontainer}>
     <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{uri:'data:image/jpeg;base64,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'}}
        />
      <Text style={styles.label}>Login{isValid ? "✅" : "❌"}</Text>
      <Text style={styles.label}>{email}</Text>

      <View style={styles.form}>
        <TextInput
        style={styles.input}
        placeholder="email"
        placeholderTextColor="#666"
        onChangeText={setEmail}
        />

        <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#666"
        secureTextEntry={true}
        onChangeText={setPassword}
        />
      </View>
      <Button 
        title="Login" 
        onPress={onLoginPressed} 
        icon="log-in"
        iconColor="red" 
        iconSize={40}
         />
    </View>
   </ScrollView>
    
  );
}

