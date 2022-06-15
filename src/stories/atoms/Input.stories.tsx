import React from 'react';
import { Formik, FormikProps } from 'formik';
import type { ComponentStory } from '@storybook/react';
import { Input as InputComponent, Box, Stack } from '../..';

export default {
  title: 'Components/Atoms/Input',
  component: InputComponent,
};

const inputVariants = [
  { name: 'Outline', variant: 'outline' },
  { name: 'Flushed', variant: 'flushed' },
  { name: 'Filled', variant: 'filled' },
];

type Values = { test: string };

const Input: ComponentStory<typeof InputComponent> = () => (
  <Box m='15px'>
    <Stack spacing={4}>
      {inputVariants.map((input) => (
        <Formik initialValues={{ test: '' }} onSubmit={() => console.log()}>
          {(props: FormikProps<Values>) => (
            <form onSubmit={props.handleSubmit} key={input.variant}>
              <InputComponent
                label={`Input - ${input.name} Variant`}
                name='test'
                type='text'
                variant={input.variant}
              />
            </form>
          )}
        </Formik>
      ))}
    </Stack>
  </Box>
);

export { Input };
