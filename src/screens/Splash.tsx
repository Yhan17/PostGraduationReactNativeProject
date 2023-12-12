import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useAppNavigation from '../hooks/useAppNavigation';

// import { Container } from './styles';

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

  return <SafeAreaView style={[StyleSheet.absoluteFill, { justifyContent: "center", alignItems: "center" }]}>
    <Text>Splash</Text>
  </SafeAreaView>
}

export default Splash;