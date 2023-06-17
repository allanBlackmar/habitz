import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HabitTrackerScreen from './src/screens/HabitTrackerScreen';
import Ionicons, {IoniconsGlyphs} from "react-native-vector-icons/Ionicons";
import SettingsScreen from "./src/screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;

                        if (route.name === 'Habit Tracker') {
                            iconName = focused ? 'checkmark-circle' : 'checkmark-circle-outline';
                        } else if (route.name === 'test 2') {
                            iconName = focused ? 'chatbubbles-sharp' : 'chatbubbles-sharp';
                        } else if (route.name === 'test 3') {
                            iconName = focused ? 'chatbubbles-sharp' : 'chatbubbles-sharp';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                })}
            >
                <Tab.Screen name="Habit Tracker" component={HabitTrackerScreen}/>
                <Tab.Screen name="test 2" component={HabitTrackerScreen}/>
                <Tab.Screen name="test 3" component={HabitTrackerScreen}/>
                <Tab.Screen name="Settings" component={SettingsScreen}/>
                {/* Add more screens and icons as needed */}
            </Tab.Navigator>
        </NavigationContainer>
    );
}
