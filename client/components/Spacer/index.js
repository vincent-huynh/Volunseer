import React from 'react';
import { View, StyleSheet } from 'react-native';

export default Spacer = ({ height, width }) => {
    const styles = StyleSheet.create({
        container: {
            height: height ?? "100%",
            width: width ?? "100%",
            padding: 0,
            margin: 0
        }
    });

    return <View style={styles.container}/>
}

