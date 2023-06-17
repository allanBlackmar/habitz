import { StyleSheet } from 'react-native';
import { HABITZ_DEFAULT } from "./color";

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
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    addButton: {
        backgroundColor: HABITZ_DEFAULT,
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
        backgroundColor: HABITZ_DEFAULT,
        padding: 4,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
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
        backgroundColor: HABITZ_DEFAULT,
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
        // marginLeft: 8,
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
    modalText: {
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
        backgroundColor: HABITZ_DEFAULT,
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    completedHabitList: {
        flex: 1,
        marginTop: 16,
        marginBottom: 16,
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 12,
        alignSelf: 'stretch', // Align to fill available width
        flexGrow: 1, // Allow the list to grow vertically
        overflow: 'scroll', // Enable scrolling when the list exceeds available space
    },
    completedHabitToggle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
        marginTop: 16,
    },
    checkbox: {
        width: 24,
        height: 24,
        // borderWidth: 2,
        // borderColor: HABITZ_DEFAULT,
        // borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    checkboxIcon: {
        color: HABITZ_DEFAULT,
        fontSize: 28,
    },
    habitName: {
        flex: 1, // Expand to fill remaining space
        marginLeft: 8, // Add margin to separate from the checkbox
        fontSize: 16,
        color: '#333',
    },
    scrollIndicatorText: {
        textAlign: 'center',
        color: '#999',
        marginTop: 8,
    }
});

export default styles;
