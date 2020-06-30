import React, { useState } from 'react';
import { View } from 'react-native';
import States from '@app/common/constants/statesAndCity.json';
import { FORM_ELEMENT_TYPES } from '@app/web/src/constants/formFields.constant';
import { useAPI } from '../../hooks/api';
import { getFlex } from '../../styles/advanceStyles';
import { FormItemCreaterNative } from '../../components/formItemCreaterNative';
import { ScreenWrapperNative } from '../../components/screenWrapper.native';
import { CardTransportDirectory } from '../../components/cards/cardTransportDirectory';

const initialStateCity = { city: 'Ajmer', state: 'Rajasthan' };

export const TransportDirectoryShipperScreenNative = ({ navigation }) => {
  const [cities, setCites] = useState(States.Rajasthan);
  const [form, setForm] = useState({ city: 'Ajmer', state: 'Rajasthan' });
  const [requestData, setRequestData] = useState(initialStateCity);
  const { data, loading, reload } = useAPI(`/directory/`, { method: 'get', params: requestData });

  const fields = [
    {
      type: FORM_ELEMENT_TYPES.RADIO,
      title: 'State',
      key: 'state',
      radioOptions: Object.keys(States) || [],
    },
    {
      type: FORM_ELEMENT_TYPES.RADIO,
      title: 'City',
      key: 'city',
      radioOptions: cities || [],
    },
  ];

  const onChange = (newForm) => {
    setForm(newForm);
    const newCity = newForm.city;
    const newState = newForm.state;
    setCites(States[newState]);
    const isOfState = (States[newState] || []).indexOf(newCity) > -1;
    if (isOfState) setRequestData({ city: newCity, state: newState });
    else {
      setRequestData({ city: null, state: null });
    }
  };

  return (
    <ScreenWrapperNative
      title='Transport Directory'
      navigation={navigation}
      onRefresh={reload}
      pullToRefresh
      loading={loading}>
      <View style={getFlex(1, 'column', 'flex-start')}>
        {fields.map((Field) => FormItemCreaterNative(Field, form, onChange))}
      </View>
      {JSON.parse(data || '[]').map((item) => (
        <CardTransportDirectory transporter={item} />
      ))}
    </ScreenWrapperNative>
  );
};
