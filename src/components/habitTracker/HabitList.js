import React, {useState} from 'react';
import {FlatList, Modal, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import Habit from './Habit';
import styles from '../../../styles';

const HabitList = ({
                       habits,
                       onEdit,
                       onRemove,
                       onToggleComplete,
                       onEditSave,
                       editingHabitId,
                       editedHabitName,
                       setEditedHabitName
                   }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = (habitId, habitName) => {
        onEdit(habitId);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setEditedHabitName('');
    };

    const saveEditedHabit = () => {
        onEditSave();
        closeModal();
    };

    const renderHabit = ({item}) => {
        if (item.completed) {
            return null;
        }

        return (
            <Habit
                habit={item}
                onEdit={() => openModal(item.id, item.name)}
                onRemove={onRemove}
                onToggleComplete={onToggleComplete}
            />
        );
    };

    const renderCompletedHabits = () => {
        const completedHabits = habits.filter((habit) => habit.completed);

        if (completedHabits.length === 0) {
            return null;
        }
        return (
            <ScrollView style={styles.completedHabitList}>
            <Text style={styles.emptyText}>Completed habits</Text>
            {completedHabits.map((habit) => (
                <Habit
                    key={habit.id}
                    habit={habit}
                    onEdit={() => openModal(habit.id, habit.name)}
                    onRemove={onRemove}
                    onToggleComplete={onToggleComplete}
                />
            ))}
            </ScrollView>
        )
    };

    return (
        <>
            {habits.length === 0 ? (
                <Text style={styles.emptyText}>Enter your habits to start tracking them!</Text>
            ) : (
                <FlatList
                    data={habits}
                    renderItem={renderHabit}
                    keyExtractor={(item) => item.id}
                    style={styles.habitList}
                />
            )}
            {renderCompletedHabits()}

            <Modal visible={isModalVisible} animationType="slide" transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TextInput
                            style={styles.modalTextInput}
                            value={editedHabitName}
                            onChangeText={setEditedHabitName}
                        />
                        <View style={styles.modalButtons}>
                            <TouchableOpacity style={styles.modalButton} onPress={saveEditedHabit}>
                                <Text style={styles.modalButtonLabel}>Save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
                                <Text style={styles.modalButtonLabel}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
};

HabitList.propTypes = {
    habits: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        })
    ).isRequired,
    onEdit: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    onToggleComplete: PropTypes.func.isRequired,
    onEditSave: PropTypes.func.isRequired,
    editingHabitId: PropTypes.string,
    editedHabitName: PropTypes.string,
    setEditedHabitName: PropTypes.func.isRequired,
};

export default HabitList;
