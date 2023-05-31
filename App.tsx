/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ForgetPasswordScreen from './screens/ForgetPasswordScreen';
import ResetPasswordScreen from './screens/ResetPassword';

const Stack = createStackNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: () => true}}>
        <Stack.Screen name="Login_Screen" component={LoginScreen} />
        <Stack.Screen name="Signup_Screen" component={SignupScreen} />
        <Stack.Screen name="Forget_Screen" component={ForgetPasswordScreen} />
        <Stack.Screen name="Reset_Screen" component={ResetPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
