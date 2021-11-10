import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Inicio from '../Screens/inicio'
import Guia from '../Navigation/guiaStack'
import Concientizacion from '../Screens/concientizacion'
import Creditos from '../Screens/creditos'
import {icon} from 'react-native-elements'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Header } from 'react-native/Libraries/NewAppScreen';
import {MaterialCommunityIcons} from 'react-native-vector-icons'

const Tab = createBottomTabNavigator();

export default function navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="inicio"
                tabBarOptions={{
                activeTintColor: "#00a680"
            }}
            >              
                <Tab.Screen 
                    name="inicio"
                    component={Inicio}
                    options={{tabBarLabel: "Inicio",
                    tabBarIcon:({color, size}) =>(
                        <MaterialCommunityIcons name="home-circle-outline" color={color} size={size}/>
                    )
                    }}
                />
                <Tab.Screen 
                    name="guia"
                    component={Guia}
                    options={{tabBarLabel:"Guia",
                    tabBarIcon:({color, size}) =>(
                        <MaterialCommunityIcons name="home-circle-outline" color={color} size={size}/>
                    )}} 
                    />
                <Tab.Screen 
                    name="concientizacion"
                    component={Concientizacion}
                    options={{tabBarLabel:"Concientizacion",
                    tabBarIcon:({color, size}) =>(
                        <MaterialCommunityIcons name="home-circle-outline" color={color} size={size}/>
                    )}} 
                    />
                <Tab.Screen 
                    name="creditos"
                    component={Creditos}
                    options={{tabBarLabel:"Creditos",
                    tabBarIcon:({color, size}) =>(
                        <MaterialCommunityIcons name="home-circle-outline" color={color} size={size}/>
                    )}} 
                    />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
