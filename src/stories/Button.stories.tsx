import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/ui/button/button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button intent="primary">Primary</Button>,
};
export const PrimaryToggable: Story = {
  render: () => (
    <Button intent="primary" toggable={true}>
      Primary toggable
    </Button>
  ),
};
export const Secondary: Story = {
  render: () => <Button intent="secondary">Secondary</Button>,
};
export const SecondaryToggable: Story = {
  render: () => (
    <Button intent="secondary" toggable={true}>
      Secondary toggable
    </Button>
  ),
};
