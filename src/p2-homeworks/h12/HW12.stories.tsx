import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import HW12 from "./HW12";
import {ReduxStoreProviderDecorator} from "../../stories/decorators/ReduxStoreProviderDecorator";

export default {
    title: 'HW12',
    component: HW12,
    decorators: [ReduxStoreProviderDecorator]
}

const Template: Story<ComponentProps<typeof HW12>> = () => <HW12 />;

export const FirstStory = Template.bind({});
