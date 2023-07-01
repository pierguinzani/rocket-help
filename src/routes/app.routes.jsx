import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { NewOrder } from '../screens/NewOrder';
import { OrderDetails } from '../screens/OrderDetails';
import { SignIn } from '../screens/SignIn';


const { Navigator, Screen } = createNativeStackNavigator()



export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#202024',
        }
      }}
    >
      <Screen
        name="Home"
        component={Home}
      />

      <Screen
        name="NewOrder"
        component={NewOrder}
      />

      <Screen
        name="OrderDetails"
        component={OrderDetails}
      />
      <Screen
        name="SignIn"
        component={SignIn}
      />
    </Navigator>
  )
}