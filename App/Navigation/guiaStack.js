import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import Uso from '../Screens/guia/uso'
import Aplicacion from '../Screens/guia/aplicacion'
import Duracion from '../Screens/guia/duracion'
import Beneficios from '../Screens/guia/beneficios'
import Guia from '../Screens/guia'

const Stack = createStackNavigator();

export default function guiaStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                    name= "guia"
                    component= {Guia}
                    options = {{title: 'Guia'}}
                />
            <Stack.Screen
                    name= "uso"
                    component= {Uso}
                    options = {{title: 'Como se Usa?'}}
                />
            <Stack.Screen
                    name= "aplicacion"
                    component= {Aplicacion}
                    options = {{title: 'Como Aplicarlo?'}}
                />
            <Stack.Screen
                    name= "duracion"
                    component= {Duracion}
                    options = {{title: 'Cuanto Dura?'}}
                />
            <Stack.Screen
                    name= "beneficios"
                    component= {Beneficios}
                    options = {{title: 'Cuales son sus Beneficios?'}}
                />
        </Stack.Navigator>
    )
}