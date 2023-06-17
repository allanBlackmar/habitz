import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles';

const Habit = ({ habit, onEdit, onRemove, onToggleComplete }) => {
    const handleToggleComplete = () => {
        onToggleComplete(habit.id);
    };

    const handleEdit = () => {
        onEdit(habit.id);
    };

    const handleRemove = () => {
        onRemove(habit.id);
    };

    return (
        <View style={styles.habit}>
            <Text style={habit.completed ? styles.completedHabitText : null}>{habit.name}</Text>
            <View style={styles.habitButtons}>
                <TouchableOpacity style={styles.habitButton} onPress={handleEdit}>
                    <Text style={styles.habitButtonLabel}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.habitButton} onPress={handleRemove}>
                    <Text style={styles.habitButtonLabel}>Remove</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.habitButton} onPress={handleToggleComplete}>
                    <Text style={styles.habitButtonLabel}>
                        {habit.completed ? 'Undo' : 'Complete'}
                    </Text>
                </TouchableOpacity>
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
