import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import Home from './Home';
import Orders from './Orders';
import React from 'react';
import OrderDetails from './OrderDetails';


const Stack = createStackNavigator();


function Routers() {
    return(
   <> 
    <NavigationContainer>
        <Stack.Navigator 
            headerMode="none" 
             screenOptions={{
                cardStyle: {
                    backgroundColor: '#FFF'
                }
            }}
        >
        {/*<Stack.Screen name="Header" component={Header}></Stack.Screen> */} 
        <Stack.Screen name="Home" component={Home}></Stack.Screen>    
        <Stack.Screen name="Orders" component={Orders}></Stack.Screen>
        <Stack.Screen name="OrderDetails" component={OrderDetails}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
   </>
    );
}

export default Routers;