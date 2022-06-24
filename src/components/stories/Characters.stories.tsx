import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DisplayData } from '../DisplayData';
import { handler } from '../../mocks/';

export default {
  title: 'Characters',
  component: DisplayData,
} as ComponentMeta<typeof DisplayData>;

const Template: ComponentStory<typeof DisplayData> = (args) => <DisplayData {...args}/>;

export const Default = Template.bind({});
Default.args = {
  people: []
}
Default.parameters = {
  backgrounds: {
    values: [
      { name: 'silver', value: '#d6d6d6' },
      { name: 'red', value: '#ed1c24' },
    ],
  },
  msw: [...handler]
}
