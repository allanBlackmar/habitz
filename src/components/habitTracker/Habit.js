import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../../styles';
import { MaterialIcons } from '@expo/vector-icons';

const Habit = ({ habit, onEdit, onRemove, onToggleComplete }) => {
    const handleToggleComplete = () => {
        onToggleComplete(habit.id);
    };

    const handleEdit = () => {
        if (!habit.completed) {
            onEdit(habit.id);
        }
    };

    const handleRemove = () => {
        onRemove(habit.id);
    };

    return (
        <View style={styles.habit}>
            <View style={styles.habitContent}>
                {habit.completed ? (
                    <TouchableOpacity
                        style={styles.checkbox}
                        onPress={handleToggleComplete}
                    >
                        <MaterialIcons
                            name="check-box"
                            size={20}
                            style={styles.checkboxIcon}
                            color="#FFF"
                        />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.checkbox}
                        onPress={handleToggleComplete}
                    >
                        <MaterialIcons
                            name="check-box-outline-blank"
                            size={20}
                            style={styles.checkboxIcon}
                            color="#FFF"
                        />
                    </TouchableOpacity>
                )}
                <Text
                    style={[
                        styles.habitName,
                        habit.completed && styles.completedHabitText, // Add the completedHabitText style when habit is completed
                    ]}
                >
                    {habit.name}
                </Text>
                <View style={styles.habitButtons}>
                    <TouchableOpacity
                        style={styles.habitButton}
                        onPress={handleEdit}
                        disabled={habit.completed}
                    >
                        <Text style={styles.habitButtonLabel}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.habitButton} onPress={handleRemove}>
                        <Text style={styles.habitButtonLabel}>Remove</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

Habit.propTypes = {
    habit: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
    onEdit: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    onToggleComplete: PropTypes.func.isRequired,
};

export default Habit;
