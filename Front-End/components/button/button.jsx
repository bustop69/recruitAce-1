import React from 'react';
import { Text, Pressable } from 'react-native';
import styles from './PostJobButtonStyles';

const PostJobButton = ({  }) => {
    return (
        <Pressable 
            style={({ pressed }) => [
                styles.button,
                pressed ? styles.buttonPressed : null
            ]}

        >
            <Text style={styles.text}>Post job</Text>
        </Pressable>
    );
}

export default PostJobButton;