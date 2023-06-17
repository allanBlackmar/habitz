import {Keyboard} from "react-native";

export const addHabit = (habits, setHabits, newHabit, setNewHabit) => {
    if (newHabit.trim() === '') {
        return; // Ignore empty habit
    }

    const habit = {
        id: Math.random().toString(),
        name: newHabit.trim(),
        completed: false,
    };

    setHabits([...habits, habit]);
    setNewHabit('');
    Keyboard.dismiss()
};

export const removeHabit = (habits, setHabits, habitId) => {
    setHabits(habits.filter((habit) => habit.id !== habitId));
};

export const editHabit = (
    habits,
    setHabits,
    setEditingHabitId,
    setEditedHabitName,
    habitId
) => {
    const habitToEdit = habits.find((habit) => habit.id === habitId);
    if (habitToEdit) {
        setEditingHabitId(habitId);
        setEditedHabitName(habitToEdit.name);
    }
};

export const saveEditedHabit = (
    habits,
    setHabits,
    setEditingHabitId,
    setEditedHabitName,
    editingHabitId,
    editedHabitName
) => {
    setHabits(
        habits.map((habit) => {
            if (habit.id === editingHabitId) {
                return { ...habit, name: editedHabitName };
            }
            return habit;
        })
    );
    setEditingHabitId(null);
    setEditedHabitName('');
};

export const markHabitCompleted = (habits, setHabits, habitId) => {
    setHabits(
        habits.map((habit) => {
            if (habit.id === habitId) {
                return { ...habit, completed: !habit.completed };
            }
            return habit;
        })
    );
};
