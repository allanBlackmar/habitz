import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, KeyboardAvoidingView, Text } from 'react-native';
import HabitList from '../components/habitTracker/HabitList';
import styles from '../style/styles';
import {
    addHabit,
    removeHabit,
    editHabit,
    saveEditedHabit,
    markHabitCompleted,
} from '../actions/habitTracker/HabitActions';
import { MaterialIcons } from "@expo/vector-icons";

const HabitTrackerScreen = () => {
    const [habits, setHabits] = useState([]);
    const [newHabit, setNewHabit] = useState('');
    const [editingHabitId, setEditingHabitId] = useState(null);
    const [editedHabitName, setEditedHabitName] = useState('');

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={100}>
            <View style={styles.contentContainer}>
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
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter habit"
                        value={newHabit}
                        onChangeText={setNewHabit}
                        onSubmitEditing={() => {
                            addHabit(habits, setHabits, newHabit, setNewHabit);
                        }}
                    />
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => {
                            addHabit(habits, setHabits, newHabit, setNewHabit);
                        }}
                    >
                        <MaterialIcons name="add" size={24} color="#FFF" />
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default HabitTrackerScreen;
