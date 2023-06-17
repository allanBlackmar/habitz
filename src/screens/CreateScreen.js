import { View, Text } from 'react-native';
import styles from '../style/styles';

const CreateScreen = () => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Create New Task</Text>
        </View>
    );
};

export default CreateScreen;
