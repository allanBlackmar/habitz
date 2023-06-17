import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HabitTrackerScreen from './src/screens/HabitTrackerScreen';
import Ionicons, {IoniconsGlyphs} from "react-native-vector-icons/Ionicons";
import {MaterialIcons} from "@expo/vector-icons";
import SettingsScreen from "./src/screens/SettingsScreen";
import {HABITZ_DEFAULT} from "./src/style/color";
import DailyTaskLogScreen from "./src/screens/DailyTaskLogScreen";
import StatsScreen from "./src/screens/StatsScreen";
import CreateScreen from "./src/screens/CreateScreen";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerStyle: {
                        backgroundColor: HABITZ_DEFAULT, // Set header background color to SKY_BLUE
                    },
                    tabBarActiveTintColor: HABITZ_DEFAULT,
                    tabBarInactiveTintColor: 'gray',
                    headerTintColor: '#FFF', // Set header text color to white
                    tabBarStyle: [
                        {
                            "display": "flex"
                        },
                        null
                    ],
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let iconColor = focused ? HABITZ_DEFAULT : 'gray'; // Use SKY_BLUE for focused icon

                        if (route.name === 'Daily Tasks') {
                            iconName = 'cloud-done';
                        }
                        else if (route.name === 'Habits') {
                            iconName = 'add-task';
                        }
                        else if (route.name === 'Create') {
                            iconName = 'add-circle';
                        }
                        else if (route.name === 'Stats') {
                            iconName = 'view-agenda';
                        }
                        else if (route.name === 'Settings') {
                            iconName = 'settings';
                        }

                        return <MaterialIcons name={iconName} size={size} color={iconColor} />;
                    },
                })}
            >
                <Tab.Screen name="Daily Tasks" component={DailyTaskLogScreen}/>
                <Tab.Screen name="Habits" component={HabitTrackerScreen}/>
                <Tab.Screen name="Create" component={CreateScreen}/>
                <Tab.Screen name="Stats" component={StatsScreen}/>
                <Tab.Screen name="Settings" component={SettingsScreen}/>
                {/* Add more screens and icons as needed */}
            </Tab.Navigator>
        </NavigationContainer>
    );
}
