import { NavigationProp, useNavigation } from "@react-navigation/native"

const useAppNavigation = () => {
  const navigation = useNavigation<NavigationProp<RouteParams>>()


  return navigation
}

export default useAppNavigation