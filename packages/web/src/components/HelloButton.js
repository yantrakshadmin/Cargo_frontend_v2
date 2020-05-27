import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';

import { demoButtonClicked } from '@app/common/actions/demo';

export const HelloButton = () => {
  const count = useSelector((state) => state.demo.clicked);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Hello Redux</h3>
      Count: 
      {' '}
      {count}
      {' '}
      <Button type="primary" onClick={() => dispatch(demoButtonClicked())}>
        Click me to increase count.
      </Button>
    </div>
  );
};
