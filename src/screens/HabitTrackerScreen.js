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

const HabitTrackerScreen = () => {
    const [habits, setHabits] = useState([]);
    const [newHabit, setNewHabit] = useState('');
    const [editingHabitId, setEditingHabitId] = useState(null);
    const [editedHabitName, setEditedHabitName] = useState('');

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Habit Tracker</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter habit"
                    value={newHabit}
                    onChangeText={setNewHabit}
                />
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => {
                        addHabit(habits, setHabits, newHabit, setNewHabit);
                    }}
                >
                    <Text style={styles.addButtonLabel}>Add</Text>
                </TouchableOpacity>
            </View>

            <HabitList
                habits={habits}
                onEdit={(habitId) => {
                    editHabit(habits, setHabits, setEditingHabitId, setEditedHabitName, habitId);
                }}
                onRemove={(habitId) => {
                    removeHabit(habits, setHabits, habitId);
                }}
                onToggleComplete={(habitId) => {
                    markHabitCompleted(habits, setHabits, habitId);
                }}
                onEditSave={() => {
                    saveEditedHabit(
                        habits,
                        setHabits,
                        setEditingHabitId,
                        setEditedHabitName,
                        editingHabitId,
                        editedHabitName
                    );
                }}
                editingHabitId={editingHabitId}
                editedHabitName={editedHabitName}
                setEditedHabitName={setEditedHabitName}
            />
        </KeyboardAvoidingView>
    );
};

export default HabitTrackerScreen;
