import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";

const placeholder = require("../../assets/images/background-image.png")
export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#fff',
  },
  link: {
    color: 'red',
    fontSize: 15, 
    fontWeight: 'heavy',
    fontStyle: 'italic',
    
  }
});