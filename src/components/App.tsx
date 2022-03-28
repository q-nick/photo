/* eslint-disable unicorn/no-array-reduce */
/* eslint-disable react/jsx-no-bind */
import type { VFC } from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Div = styled.div``;

export const App: VFC = () => {
  const [values, setValue] = useState(['']);

  useEffect(() => {
    if (values[values.length - 1] !== '') {
      setValue((previousValues) => {
        return [...previousValues, ''];
      });
    }
  }, [values]);

  return (
    <Div>
      <pre style={{ marginBottom: '20px' }}>{JSON.stringify(values)}</pre>

      {values.map((value, index) => {
        return (
          <div key={index} style={{ marginBottom: '20px' }}>
            <input
              onChange={(event): void =>
                setValue((previousValues) => {
                  previousValues[index] = event.target.value;
                  return [...previousValues];
                })
              }
              type="number"
              value={value}
            />
          </div>
        );
      })}
      <h3>
        Suma:{' '}
        {values.reduce((previous, value) => {
          const previousNumber = Number.parseInt(previous, 10);
          const valueNumber = Number.parseInt(value, 10) || 0;

          return `${previousNumber + valueNumber}`;
        }, '0')}
      </h3>
    </Div>
  );
};
