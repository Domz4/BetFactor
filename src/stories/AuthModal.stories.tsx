import { Meta, StoryObj } from "@storybook/react";
import AuthDialog from "../components/ui/authDialog/authDialog";

const meta: Meta<typeof AuthDialog> = {
  title: "Auth Modal",
  component: AuthDialog,
};

export default meta;
type Story = StoryObj<typeof AuthDialog>;

export const AuthModal: Story = {};
