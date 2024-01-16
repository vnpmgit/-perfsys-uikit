import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input from './Input';
import Icon from '../Icon';

export default {
  title: 'Perfsys/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label Text',
  register: () => {}
}

export const Password = Template.bind({});
Password.args = {
  label: 'Label Text',
  type: 'password',
  register: () => {}
};

export const Prefix = Template.bind({});
Prefix.args = {
  label: 'Label Text',
  type: 'text',
  prefix: 'https://',
  register: () => {}
};

export const Postfix = Template.bind({});
Postfix.args = {
  label: 'Label Text',
  type: 'text',
  postfix: '.com',
  register: () => {}
};

export const PostfixAndPrefix = Template.bind({});
PostfixAndPrefix.args = {
  label: 'Label Text',
  type: 'text',
  prefix: 'https://',
  postfix: '.com',
  register: () => {}
};

export const Error = Template.bind({});
Error.args = {
  label: 'Label Text',
  error: {},
  register: () => {}
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  label: 'Label Text',
  register: () => {},
  error: {
    message: 'Error text message'
  }
};

export const PostfixError = Template.bind({});
PostfixError.args = {
  label: 'Label Text',
  type: 'text',
  postfix: '.com',
  error: {},
  register: () => {}
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Label Text',
  disabled: true,
  register: () => {}
};

export const Nolabel = Template.bind({});
Nolabel.args = {
  type: 'email',
  register: () => {},
};

export const Search = Template.bind({});
Search.args = {
  type: 'text',
  customPrefix: (
    <Icon name='search'/>
  ),
  placeholder:"Search",
  register: () => {},
};
