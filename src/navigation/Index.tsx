import { createStackNavigator } from '@react-navigation/stack'
import { PropsWithChildren } from 'react'
import Home from '../screens/Home'
import Splash from '../screens/Splash'
const Stack = createStackNavigator()



const Navigator: React.FC<PropsWithChildren> = () => (
  <Stack.Navigator initialRouteName='Splash' screenOptions={
    { headerShown: false }
  }>
    <Stack.Screen name='Splash' component={Splash} />
    <Stack.Screen name='Home' component={Home} />
  </Stack.Navigator>
)

export default Navigator