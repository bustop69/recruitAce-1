import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#007BFF', // Bootstrap primary button color
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonPressed: {
        backgroundColor: '#0056b3', // Darken color when pressed
    },
    text: {
        color: 'white',
        fontSize: 16
    }
});

export default styles;