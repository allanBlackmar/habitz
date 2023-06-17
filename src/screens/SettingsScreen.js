import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, KeyboardAvoidingView, Text } from 'react-native';
import HabitList from '../components/habitTracker/HabitList';
import styles from '../../styles';
import {
    addHabit,
    removeHabit,
    editHabit,
    saveEditedHabit,
    markHabitCompleted,
} from '../actions/habitTracker/HabitActions';

const SettingsScreen = () => {
    const [habits, setHabits] = useState([]);
    const [newHabit, setNewHabit] = useState('');
    const [editingHabitId, setEditingHabitId] = useState(null);
    const [editedHabitName, setEditedHabitName] = useState('');

    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Settings</Text>
        </View>
    );
};

export default SettingsScreen;
