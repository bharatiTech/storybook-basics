import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Home } from '../Home';

export default {
  title: 'Home',
  component: Home,
  args:{
    color: '#5478b0',
  },
  argTypes: {
    color: { control: 'text' },
    colorName: { control: 'text' }
  },
  parameters: {
    backgrounds: {
      values: [
        { name: 'violet', value: 'violet' },
        { name: 'lightblue', value: 'lightblue' },
        { name: 'lightgreen', value: 'lightgreen' },
      ],
    }
  }
}as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args, parameters) => <Home {...args} {...parameters}/>;

// export const Primary = () => <Home {...clr}/>;   //This doesn't allow passing args to the control

export const Primary = Template.bind({});
Primary.args = {
  colorName: 'Blue Varient'
};

export const Pink = Template.bind({});
Pink.args = { 
  color: 'pink',
  colorName: 'Pink Color'
};

export const PinkLarge = Template.bind({});
PinkLarge.args={
  ...Pink.args,
  fontSize: '30px',
  padding: '3%'
}
PinkLarge.parameters = {
  backgrounds: {
    values: [
      { name: 'silver', value: '#d6d6d6' },
      { name: 'red', value: '#ed1c24' },
    ],
  }
}

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  ...PinkLarge.args,
  ...Primary.args
}
