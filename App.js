import React, { useState } from 'react';
import {  Text, View, TextInput, TouchableOpacity } from 'react-native';
import HabitList from './components/HabitList';
import styles from './styles';
import * as HabitActions from './actions/HabitActions';

export default function App() {
    const [habits, setHabits] = useState([]);
    const [newHabit, setNewHabit] = useState('');
    const [editingHabitId, setEditingHabitId] = useState(null);
    const [editedHabitName, setEditedHabitName] = useState('');

    const addHabit = () => {
        HabitActions.addHabit(habits, setHabits, newHabit, setNewHabit);
    };

    const removeHabit = (habitId) => {
        HabitActions.removeHabit(habits, setHabits, habitId);
    };

    const editHabit = (habitId) => {
        HabitActions.editHabit(habits, setHabits, setEditingHabitId, setEditedHabitName, habitId);
    };

    const saveEditedHabit = () => {
        HabitActions.saveEditedHabit(
            habits,
            setHabits,
            setEditingHabitId,
            setEditedHabitName,
            editingHabitId,
            editedHabitName
        );
    };

    const markHabitCompleted = (habitId) => {
        HabitActions.markHabitCompleted(habits, setHabits, habitId);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Habit Tracker</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter habit"
                    value={newHabit}
                    onChangeText={setNewHabit}
                />
                <TouchableOpacity style={styles.addButton} onPress={addHabit}>
                    <Text style={styles.addButtonLabel}>Add</Text>
                </TouchableOpacity>
            </View>

            <HabitList
                habits={habits}
                onEdit={editHabit}
                onRemove={removeHabit}
                onToggleComplete={markHabitCompleted}
                onEditSave={saveEditedHabit}
                editingHabitId={editingHabitId}
                editedHabitName={editedHabitName}
                setEditedHabitName={setEditedHabitName}
            />
        </View>
    );
}
