import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { FORM_ELEMENT_TYPES } from '@app/web/src/constants/formFields.constant';
import { Picker } from '@react-native-community/picker';
import { $User$Supplier$FTL, $User$Supplier$PTL } from '@app/common/constants/userTypes';
import Icon from 'react-native-vector-icons/Ionicons';
import { column, row, signInStyle } from '../styles/advanceStyles';
import { Divider } from './divider.component';

export const FormItemCreaterNative = (Field, form, setForm) => {
  switch (Field.type) {
    case FORM_ELEMENT_TYPES.RADIO:
      return (
        <View style={[column, { width: '100%' }]}>
          <View style={row} key={Field.key}>
            <View style={signInStyle.inputText}>
              <Text>{Field.title}</Text>
            </View>
            <Picker
              selectedValue={form.type}
              style={{ height: 50, width: 100 }}
              onValueChange={(itemValue) => setForm({ ...form, type: itemValue })}>
              {Field.radioOptions.map((Item) => (
                <Picker.Item label={Item.label} value={Item.value} key={Item.value} />
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
    default:
      return null;
  }
};
