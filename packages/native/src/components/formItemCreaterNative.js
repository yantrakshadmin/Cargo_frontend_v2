import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { FORM_ELEMENT_TYPES } from '@app/web/src/constants/formFields.constant';
import { Picker } from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/Ionicons';
import { column, row, signInStyle } from '../styles/advanceStyles';
import { Divider } from './divider.component';

export const FormItemCreaterNative = (Field, form, onChangeForm) => {
  switch (Field.type) {
    case FORM_ELEMENT_TYPES.RADIO:
      return (
        <View style={[column, { width: '100%' }]}>
          <View style={row} key={Field.key}>
            <View style={signInStyle.inputText}>
              <Text>{Field.title}</Text>
            </View>
            <Picker
              selectedValue={form[Field.key]}
              style={{ flex: 1 }}
              onValueChange={(itemValue, index) => {
                onChangeForm({ ...form, [Field.key]: itemValue }, Field);
              }}>
              {Field.radioOptions.map((Item) => (
                <Picker.Item
                  label={Item.label || Item}
                  /* eslint-disable-next-line no-nested-ternary */
                  value={Item.value || Item}
                  key={Item.value || Item}
                />
              ))}
            </Picker>
          </View>
          <Divider />
        </View>
      );
    case FORM_ELEMENT_TYPES.INPUT:
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
                  onChangeForm({ ...form, [Field.key]: text }, Field);
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
    default:
      return null;
  }
};
