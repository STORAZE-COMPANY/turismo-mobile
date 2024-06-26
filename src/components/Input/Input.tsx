import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
import Box from '../Box/Box';
import { Text } from 'react-native'; // Import the Text component
import { StyleProps } from '@mobile/utils/styleProps'; // Import the StyleProps interface
interface InputProps {
    label?: string;
    placeholder?: string;
}

function Input(props: InputProps) {
    const { placeholder } = props;

    const inputStyles = {
        ...styles.inputText,
    }

    const conatinerSytles = {
        ...styles.TextContainer,
    }

    return (
        <Box>
            {props.label && <Text style={styles.Label}>{props.label}</Text>}
            <Box flexDirection='row' alignItems='center'>
                <TextInput
                    style={inputStyles}
                    placeholder={placeholder}
                    placeholderTextColor={'#A0A0A0'}
                />
            </Box>
        </Box>
    );
}

export { Input };