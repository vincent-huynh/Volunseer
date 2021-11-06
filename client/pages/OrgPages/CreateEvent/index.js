import React from 'react';
import { ScrollView, View } from 'react-native';

import PageBody from '../../../components/PageBody';
import Spacer from '../../../components/Spacer';
import SelectionButton from '../../../components/SelectionButton';
import TextInput from '../../../components/TextInput';

export default CreateEventView = ({navigator}) => {
    <View style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" />
            <View style={{ position: "absolute", marginTop: 50, marginLeft: 20, zIndex: 1 }} >
                <Icon name="back" size={16} color="#000" onPress={() => navigation.pop()} />
            </View>

            <ScrollView style={{ marginTop: SharedStyles.topPageMargin }}>
                <PageBody>

                </PageBody>
            </ScrollView>
            </View>
}