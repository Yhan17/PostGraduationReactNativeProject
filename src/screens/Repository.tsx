import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import useAppNavigation from "../hooks/useAppNavigation"


const Repository: React.FC = () => {
  // const navigation = useAppNavigation()



  return <SafeAreaView style={[StyleSheet.absoluteFill, styles.container]}>
    <Text>Repositório</Text>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#3498db',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,

    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});


export default Repository;