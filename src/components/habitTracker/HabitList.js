import React, {useState} from 'react';
import {FlatList, Modal, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import Habit from './Habit';
import styles from '../../../styles';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

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
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [isCompletedHabitVisible, setIsCompletedHabitVisible] = useState(true);
    const toggleCompletedHabitVisibility = () => {
        setIsCompletedHabitVisible(!isCompletedHabitVisible);
    };


    const openModal = (habitId, habitName) => {
        onEdit(habitId);
        setIsEditModalVisible(true);
    };

    const closeModal = () => {
        setIsEditModalVisible(false);
        setEditedHabitName('');
    };

    const saveEditedHabit = () => {
        onEditSave();
        closeModal();
    };
    const renderHabit = ({ item }) => {
        if (item.completed) {
            return null;
        }

        return (
            <TouchableOpacity onPress={() => openModal(item.id, item.name)}>
                <ScrollView style={styles.habit}>
                    <View style={styles.habitContent}>
                        {item.completed ? (
                            <TouchableOpacity
                                style={styles.checkbox}
                                onPress={() => onToggleComplete(item.id)}
                            >
                                <MaterialIcons
                                    name="check-box"
                                    size={20}
                                    style={styles.checkboxIcon}
                                    color="#008080"
                                />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                style={styles.checkbox}
                                onPress={() => onToggleComplete(item.id)}
                            >
                                <MaterialIcons
                                    name="check-box-outline-blank"
                                    size={20}
                                    style={styles.checkboxIcon}
                                    color="#008080"
                                />
                            </TouchableOpacity>
                        )}
                        <Text style={styles.habitName}>{item.name}</Text>
                        <TouchableOpacity
                            style={styles.habitButton}
                            onPress={() => onRemove(item.id)}
                        >
                            <MaterialIcons
                                name="delete"
                                size={20}
                                color="#FFF"
                            />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </TouchableOpacity>
        );
    };


    const renderCompletedHabits = () => {
        const completedHabits = habits.filter((habit) => habit.completed);

        if (completedHabits.length === 0) {
            return null;
        }

        if (!isCompletedHabitVisible) {
            return (
                <TouchableOpacity
                    style={styles.completedHabitToggle}
                    onPress={toggleCompletedHabitVisibility}
                >
                    <AntDesign name="caretup" size={24} color="#333" />
                    <Text style={styles.completedHabitToggleText}>Show Completed Habits</Text>
                </TouchableOpacity>
            );
        }

        return (
            <>
                <TouchableOpacity
                    style={styles.completedHabitToggle}
                    onPress={toggleCompletedHabitVisibility}
                >
                    <AntDesign name="caretdown" size={24} color="#333" />
                    <Text style={styles.completedHabitToggleText}>Hide Completed Habits</Text>
                </TouchableOpacity>
                <ScrollView
                    style={styles.completedHabitList}
                    showsVerticalScrollIndicator={true}
                >
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
            </>
        );
    };

    return (
        <>
            {habits.length === 0 ? (
                <Text style={styles.emptyText}>Enter your habits to start tracking them!</Text>
            ) :
                ( <Text style={styles.emptyText}>Todays Habits:</Text> )
            }
            {
                <FlatList
                    data={habits}
                    renderItem={renderHabit}
                    keyExtractor={(item) => item.id}
                    style={styles.habitList}
                />
            }
            {renderCompletedHabits()}

            <Modal visible={isEditModalVisible} animationType="slide" transparent>
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
