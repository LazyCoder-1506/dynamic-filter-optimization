import type { Meta, StoryObj } from '@storybook/react';
import FilterComponent from './FilterComponent';

const meta: Meta<typeof FilterComponent> = {
  title: 'Project/Filter',
  tags: ['autodocs'],
  component: FilterComponent,
};

export default meta;

type Story = StoryObj<typeof FilterComponent>;


export const Basic: Story = {
  args: {
    values: ['option 1', 'option 2', 'option 3', 'option 4'],
    selectedValues: [],
    placeholderText: 'Placeholder text',
    changeHandler: () => {console.log('Changed')}
  }
}

export const SingleValueSelected: Story = {
  args: {
    ...Basic.args,
    selectedValues: ['option 3']
  }
}

export const MultipleValuesSelected: Story = {
  args: {
    ...Basic.args,
    selectedValues: ['option 1', 'option 4']
  }
}