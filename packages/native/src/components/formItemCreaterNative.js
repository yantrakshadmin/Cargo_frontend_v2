import React,{ useState } from 'react';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import { FORM_ELEMENT_TYPES } from '@app/web/src/constants/formFields.constant';
import { Picker } from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import {dateFormatter, nativeDateFormatter} from '@app/common/helpers/dateFomatter';
import { column, getFlex, row, signInStyle } from '../styles/advanceStyles';
import { Divider } from './divider.component';
import { RadioPicker } from './radioPicker';


export const FormItemCreaterNative = (Field, form, onChangeForm) => {
  const [show, setShow] = useState(false);

  switch (Field.type) {
    case FORM_ELEMENT_TYPES.DATE:return(
      <View style={[column, { width: '100%' }]} key={Field.key}>
      <View style={row}>
        <Text>
          {Field.title}
          {' : '}
        </Text>
        <TouchableOpacity onPress={()=>{setShow(true)}}>
          <Text>
            {nativeDateFormatter(form[Field.key])}
          </Text>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            testID='dateTimePicker'
            value={form[Field.key]}
            mode='datetime'
            display='default'
            onChange={(itemValue, selectedDate) => {
              setShow(false)
              onChangeForm({ ...form, [Field.key]: selectedDate }, Field);
            }}
        />
        )}
      </View>
        <Divider />
      </View>
    )
    case FORM_ELEMENT_TYPES.RADIO:
      return (
        <View style={[column, { width: '100%' }]} key={Field.key}>
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
              <Picker.Item
                label='Choose...'
                /* eslint-disable-next-line no-nested-ternary */
                value=''
                key='choose'
              />
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
        <View style={[column, { width: '100%' }]} key={Field.key}>
          <View style={row}>
            {Field.showHeading?(
              <Text>
                {Field.title}
                {' : '}
              </Text>
            ):null}
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
                {...Field.inputParams}
              />
            </View>
            {Field.RightComponent}
          </View>
          <Divider />
        </View>
      );
    case FORM_ELEMENT_TYPES.SWITCH:return(
      <View
        style={
        [
          getFlex(1,'column','flex-start','flex-start'),
          { width: '100%' ,margin:5 }]
}
        key={Field.key}>
        <RadioPicker
          options={Field.switchOptions}
          defaultValue={Field.defaultValue}
          multiple={Field.multiple}
          heading={Field.title}
          showModal={Field.showModal}
          onChange={(value)=>{
            onChangeForm({ ...form, [Field.key]:value }, Field);}}
        />
        <Divider />
      </View>
    );
    default:
      return null;
  }
};
