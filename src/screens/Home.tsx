
import React from 'react';
import {
  Pressable,
  SafeAreaView, StyleSheet,
  Text
} from 'react-native';
import useAppNavigation from '../hooks/useAppNavigation';


function Home(): React.JSX.Element {
  const navigation = useAppNavigation()
  return (
    <SafeAreaView style={[StyleSheet.absoluteFill, { justifyContent: "center", alignItems: "center" }]}>
      <Text>Hello World</Text>
      {/* <Pressable onPress={() => navigation.navigate('Splash')}>
        <Text>Navigate To Splash</Text>
      </Pressable> */}
    </SafeAreaView>
  );
}

export default Home;
