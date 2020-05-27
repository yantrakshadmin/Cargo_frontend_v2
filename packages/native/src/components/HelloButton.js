import React from 'react';
import {View, Text} from 'react-native';

import {Button} from '@ant-design/react-native';
import {useDispatch, useSelector} from 'react-redux';

import {demoButtonClicked} from '@app/common/actions/demo';

import {styles} from 'styles/default';

export const HelloButton = () => {
  const count = useSelector((state) => state.demo.clicked);
  const dispatch = useDispatch();

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Hello Redux</Text>
      <Text style={styles.sectionDescription}>
        Count:
        {count}
      </Text>
      <Button onPress={() => dispatch(demoButtonClicked())} type="primary">
        Click me to increase count
      </Button>
    </View>
  );
};
