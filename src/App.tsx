import React, { useEffect } from 'react';
import './App.css';
import { DatePicker, Flex } from 'antd';
import { useTelegram } from './hooks/useTelegram';

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);
  return (
    <Flex justify={'center'}>
      <DatePicker />
    </Flex>
  );
}

export default App;
