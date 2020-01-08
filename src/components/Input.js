import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    view: {
        height: 50,
        marginTop: 15,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 4,
        padding: 15
    }
});

export default ({ placeholder, onChangeText, value }) => (
    <View style={styles.view}>
        <TextInput style={styles.input} onChangeText={onChangeText} placeholder={placeholder} value={value} />
    </View>
);