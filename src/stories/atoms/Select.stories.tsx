import React from 'react';
import { Formik, FormikProps } from 'formik';
import { ComponentMeta } from '@storybook/react';
import type { ComponentStory } from '@storybook/react';
import { Select as SelectComponent, Box, Stack, Text } from '../..';

export default {
  title: 'Components/Atoms/Select',
  component: SelectComponent,
} as ComponentMeta<typeof SelectComponent>;

type Values = { test: string };

const selectVariants = [
  { name: 'Outline', variant: 'outline' },
  { name: 'Filled', variant: 'filled' },
  { name: 'Flushed', variant: 'flushed' },
];

const selectOptions = [
  { label: '$1000', value: 1000 },
  { label: '$10,000', value: 10000 },
];

const Select: ComponentStory<typeof SelectComponent> = () => (
  <Box w='50%'>
    <Stack spacing={5}>
      {selectVariants.map((select) => (
        <Formik
          initialValues={{ test: '' }}
          onSubmit={() => console.log()}
          key={select.variant}
        >
          {(props: FormikProps<Values>) => (
            <form onSubmit={props.handleSubmit}>
              <Stack spacing={3}>
                <Text>{select.name}</Text>
                <SelectComponent
                  name='testing'
                  options={selectOptions}
                  variant={select.variant}
                />
              </Stack>
            </form>
          )}
        </Formik>
      ))}
    </Stack>
  </Box>
);

export { Select };
