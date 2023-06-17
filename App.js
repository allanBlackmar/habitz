import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HabitTrackerScreen from './src/screens/HabitTrackerScreen';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Habit Tracker" component={HabitTrackerScreen} />
                {/* Add more screens and icons as needed */}
            </Tab.Navigator>
        </NavigationContainer>
    );
}
