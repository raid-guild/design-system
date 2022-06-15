import React from 'react';
import { Formik, FormikProps } from 'formik';
import type { ComponentStory } from '@storybook/react';
import { Textarea as TextareaComponent, Box, Stack } from '../..';

export default {
  title: 'Components/Atoms/Textarea',
  component: TextareaComponent,
};

const textareaVariants = [
  { name: 'Outline', variant: 'outline' },
  { name: 'Flushed', variant: 'flushed' },
  { name: 'Filled', variant: 'filled' },
];

type Values = { test: string };

const Textarea: ComponentStory<typeof TextareaComponent> = () => (
  <Box m='15px'>
    <Stack spacing={4}>
      {textareaVariants.map((textarea) => (
        <Formik initialValues={{ test: '' }} onSubmit={() => console.log()}>
          {(props: FormikProps<Values>) => (
            <form onSubmit={props.handleSubmit} key={textarea.variant}>
              <TextareaComponent
                label={`Textarea - ${textarea.name} Variant`}
                name='test'
                type='text'
                variant={textarea.variant}
              />
            </form>
          )}
        </Formik>
      ))}
    </Stack>
  </Box>
);

export { Textarea };
