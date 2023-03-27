import type { ComponentMeta, ComponentStory } from '@storybook/react';

import IconsPreview from './';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Assets/Icons',
  component: IconsPreview,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            //  Override the result of a rule to return "Needs Review" rather
            //  than "Violation" if the rule fails. It will show in the
            //  'Incomplete' tab.
            id: 'color-contrast',
            reviewOnFail: true,
          },
        ],
      },
    },
  },
} as ComponentMeta<typeof IconsPreview>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconsPreview> = (args) => <IconsPreview {...args} />;

export const Icons = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Icons.args = {};
