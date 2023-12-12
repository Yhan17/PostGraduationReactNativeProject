import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import Navigator from './navigation/Index';

// import { Container } from './styles';

const App: React.FC = () => {
  return <NavigationContainer>
    <Navigator/>
  </NavigationContainer>
}

export default App;