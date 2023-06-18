import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../style/styles';
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
                    {onEdit && !habit.completed && (
                        <TouchableOpacity
                            style={styles.habitButton}
                            onPress={handleEdit}
                        >
                            <Text style={styles.habitButtonLabel}>Edit</Text>
                        </TouchableOpacity>
                    )}
                    <TouchableOpacity
                        style={styles.habitButton}
                        onPress={handleRemove}
                    >
                        <MaterialIcons
                            name="delete"
                            size={20}
                            color="#FFF"
                        />
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
    onEdit: PropTypes.func,
    onRemove: PropTypes.func.isRequired,
    onToggleComplete: PropTypes.func.isRequired,
};

export default Habit;
