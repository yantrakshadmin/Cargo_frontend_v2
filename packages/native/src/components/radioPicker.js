import React, { useState } from 'react';
import { View, Text,Switch } from 'react-native';
import { margin, yantraColors } from '../styles/default';
import { font, getFlex } from '../styles/advanceStyles';
import { CustomModal } from './customModal';

export const RadioPicker = ({ multiple,defaultValue,options,onChange,heading,showModal }) => {
  const [visible,setVisible] = useState(false)
  const [value,setValue] = useState(multiple?[]:defaultValue||' ')
  const changeValueMultiple = (status,item) =>{
    if(status){
      setValue([...value,item.value])
      onChange([...value,item.value])
    }
    else{
      setValue(value.filter(i=>(i!==item.value)))
      onChange(value.filter(i=>(i!==item.value)))
    }
  }
  const changeValueSingle = (status,item) =>{
    if(status){
      setValue(item.value)
      onChange(item.value)
    }
    else{
      setValue('')
      onChange('')
    }
  }

  const Body = (
    <View style={[getFlex(1,'column',)]}>
      {multiple?options.map((item)=>(
        <View style={getFlex(1,'row',)}>
          <Switch
            key={item.value}
            trackColor={{ false: "#767577", true: yantraColors.primary }}
            thumbColor={value.some((element)=>(element===item.value))
              ? yantraColors.white : "#f4f3f4"}
            ios_backgroundColor='#3e3e3e'
            onValueChange={(e)=>{changeValueMultiple(e,item)}}
            value={value.some((element)=>(element===item.value))}
      />
          <Text style={font(15,'normal')}>
            {item.label}
          </Text>
        </View>
      )):options.map((item)=>(
        <View style={getFlex(1,'row',)}>
          <Switch
            key={item.value}
            trackColor={{ false: "#767577", true: yantraColors.primary }}
            thumbColor={value===item.value? yantraColors.white : "#f4f3f4"}
            ios_backgroundColor='#3e3e3e'
            onValueChange={(e)=>{changeValueSingle(e,item)}}
            value={value===item.value}
      />
          <Text style={font(15,'normal')}>
            {item.label}
          </Text>
        </View>
      ))}
    </View>
  )
  if(showModal)
  {return (
    <CustomModal
      title={heading}
      visible={visible}
      setVisible={setVisible}
      Appear={()=>(
        <View style={[getFlex(1,'row')]}>
          <Text>
            {heading}
            {' : '}
          </Text>
          <Text style={font(15,'normal')}>
            Choose...
          </Text>
        </View>
      )}
    >
      <View style={margin('padding').md}>
        {Body}
      </View>
    </CustomModal>
  );}

  return (
    <View style={[getFlex(1,'row'),]}>
      <Text>
        {heading}
        {' : '}
      </Text>
      {Body}
    </View>
  )

};

