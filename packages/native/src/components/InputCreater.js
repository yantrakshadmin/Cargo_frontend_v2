import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { column, row, signInStyle } from '../styles/advanceStyles';
import { Divider } from './divider.component';

export const InputCreater = ({ Field, form, setForm }) => {
  return (
    <View style={[column, { width: '100%' }]}>
      <View style={row}>
        {Field.icon ? (
          <Icon name={Field.icon.name} size={Field.icon.size} color={Field.icon.color} />
        ) : null}
        <View style={signInStyle.inputText}>
          <TextInput
            value={form[Field.key]}
            onChangeText={(text) => {
              setForm({ ...form, [Field.key]: text });
            }}
            placeholder={Field.title}
            maxLength={20}
            {...Field.inputParams}
          />
        </View>
        {Field.RightComponent}
      </View>
      <Divider />
    </View>
  );
};
