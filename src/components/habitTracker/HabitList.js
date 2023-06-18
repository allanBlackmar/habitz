import React, { useState } from 'react';
import { FlatList, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import Habit from './Habit';
import styles from '../../style/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {HABITZ_DEFAULT} from "../../style/color";

const HabitList = ({
                       habits,
                       onEdit,
                       onRemove,
                       onToggleComplete,
                       onEditSave,
                       editingHabitId,
                       editedHabitName,
                       setEditedHabitName,
                   }) => {
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [isDeleteHabitModalVisible, setIsDeleteHabitModalVisible] = useState(false);
    const [habitToDelete, setHabitToDelete] = useState(null);
    const [isCompletedHabitVisible, setIsCompletedHabitVisible] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const toggleSearchBar = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    const toggleCompletedHabitVisibility = (visible) => {
        setIsCompletedHabitVisible(visible);
    };

    const openEditModal = (habitId, habitName) => {
        onEdit(habitId);
        setIsEditModalVisible(true);
    };

    const closeEditModal = () => {
        setIsEditModalVisible(false);
        setEditedHabitName('');
    };

    const openDeleteConfirmationModal = (habitId) => {
        setHabitToDelete(habitId);
        setIsDeleteHabitModalVisible(true);
    };

    const closeDeleteConfirmationModal = () => {
        setIsDeleteHabitModalVisible(false);
    };

    const saveEditedHabit = () => {
        onEditSave();
        closeEditModal();
    };

    const handleDelete = () => {
        onRemove(habitToDelete);
        closeDeleteConfirmationModal();
    };


    const handleSearch = (text) => {
        setSearchQuery(text);
    };

    const renderHabit = ({ item }) => {
        if (item.completed || !item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            return null;
        }

        return (
            <TouchableOpacity onPress={() => openEditModal(item.id, item.name)}>
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
                                    color="#87CEEB"
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
                                    color="#87CEEB"
                                />
                            </TouchableOpacity>
                        )}
                        <Text style={styles.habitName}>{item.name}</Text>
                        <TouchableOpacity
                            style={styles.habitButton}
                            onPress={() => openDeleteConfirmationModal(item.id)}
                        >
                            <MaterialIcons name="delete" size={20} color="#FFF" />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </TouchableOpacity>
        );
    };

    const renderCompletedHabits = () => {
        const completedHabits = habits.filter((habit) => habit.completed);

        const filteredCompletedHabits = completedHabits.filter((habit) =>
            habit.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (completedHabits.length === 0) {
            return null;
        }

        const completedHabitsVisible =
            isCompletedHabitVisible || (searchQuery !== '' && filteredCompletedHabits.length > 0);

        const toggleCompletedHabitsVisibility = () => {
            setIsCompletedHabitVisible(!isCompletedHabitVisible);
        };

        return (
            <>
                <TouchableOpacity
                    style={styles.completedHabitToggle}
                    onPress={toggleCompletedHabitsVisibility}
                >
                    <AntDesign
                        name={isCompletedHabitVisible ? 'caretdown' : 'caretup'}
                        size={24}
                        color={HABITZ_DEFAULT}
                    />
                    <Text style={styles.completedHabitToggleText}>
                        {isCompletedHabitVisible ? 'Hide Completed Habits' : 'Show Completed Habits'}
                    </Text>
                </TouchableOpacity>
                {completedHabitsVisible && (
                    <ScrollView style={styles.completedHabitList} showsVerticalScrollIndicator={true}>
                        <Text style={styles.emptyText}>Completed habits</Text>
                        {filteredCompletedHabits.map((habit) => (
                            <Habit
                                key={habit.id}
                                habit={habit}
                                onRemove={() => openDeleteConfirmationModal(habit.id)}
                                onToggleComplete={onToggleComplete}
                            />
                        ))}
                    </ScrollView>
                )}
            </>
        );
    };

    // habits.length > 0 && (habits.filter(habit => !habit.completed).length > 0 || isCompletedHabitVisible
    return (
        <>
            <View style={styles.searchContainer}>
                {habits.length > 0 && (
                    <View style={styles.searchContainer}>
                        <TouchableOpacity style={styles.searchButton}>
                            <MaterialIcons name="search" size={24} color="#FFF" />
                        </TouchableOpacity>
                        {(
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Search habits..."
                                value={searchQuery}
                                onChangeText={setSearchQuery}
                            />
                        )}
                    </View>
                )}
            </View>
            {habits.length === 0 ? (
                <Text style={styles.emptyText}>Enter your habits to start tracking them!</Text>
            ) : (
                <Text style={styles.emptyText}>Today's Habits:</Text>
            )}
            <FlatList
                data={habits}
                renderItem={renderHabit}
                keyExtractor={(item) => item.id}
                style={styles.habitList}
            />
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
                            <TouchableOpacity style={styles.modalButton} onPress={closeEditModal}>
                                <Text style={styles.modalButtonLabel}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal visible={isDeleteHabitModalVisible} animationType="slide" transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Are you sure you want to delete this habit?</Text>
                        <View style={styles.modalButtons}>
                            <TouchableOpacity style={styles.modalButton} onPress={handleDelete}>
                                <Text style={styles.modalButtonLabel}>Delete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton} onPress={closeDeleteConfirmationModal}>
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
