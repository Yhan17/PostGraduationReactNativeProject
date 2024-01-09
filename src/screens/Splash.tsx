import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useAppNavigation from '../hooks/useAppNavigation';



const Splash: React.FC = () => {
  const navigation = useAppNavigation()

  useEffect(() => {
    setTimeout(() => navigation.reset({
      index: 0,
      routes: [{
        name: 'Home'
      }],

    }), 3000)
  }, [])

  return <SafeAreaView style={[StyleSheet.absoluteFill, styles.container]}>

    <Image
      source={{ uri: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png' }}
      style={styles.logo}
    />
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


export default Splash;