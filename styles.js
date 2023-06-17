import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center', // Center elements vertically
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
        textAlign: 'center', // Center the text
    },
    titleContainer: {
        marginTop: 28, // Add margin bottom to move the title down
        marginBottom: 28, // Add margin bottom to move the title down
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 4,
        padding: 8,
        marginRight: 8,
        fontSize: 16,
        color: '#333',
    },
    addButton: {
        backgroundColor: '#008080',
        padding: 8,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonLabel: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    emptyText: {
        fontSize: 18,
        fontStyle: 'italic',
        color: '#999',
    },
    habitList: {
        flex: 1,
        marginTop: 16,
    },
    habit: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    habitButtons: {
        flexDirection: 'row',
        marginTop: 8,
    },
    habitButton: {
        backgroundColor: '#008080',
        padding: 4,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
    },
    habitButtonLabel: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold',
    },
    editInput: {
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 4,
        padding: 8,
        marginBottom: 8,
        fontSize: 16,
        color: '#333',
    },
    editButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    editButton: {
        backgroundColor: '#008080',
        padding: 4,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
    },
    editButtonLabel: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold',
    },
    completedHabitText: {
        textDecorationLine: 'line-through',
        color: '#999',
    },

    // Modal Styles
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 16,
        width: '80%',
    },
    modalTextInput: {
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 4,
        padding: 8,
        marginBottom: 8,
        fontSize: 16,
        color: '#333',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    modalButton: {
        backgroundColor: '#008080',
        padding: 8,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
    },
    modalButtonLabel: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    disabledButton: {
        backgroundColor: '#999',
    },
    habitContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    completedHabitList: {
        maxHeight: 200, // Adjust the maximum height as needed
        marginTop: 16,
        marginBottom: 16,
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 16,
    },
});

export default styles;
