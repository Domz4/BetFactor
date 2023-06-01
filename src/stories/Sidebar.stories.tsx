import { Meta, StoryObj } from "@storybook/react";
import SidebarComponent from "../components/ui/sidebar/sidebar";

const meta: Meta<typeof SidebarComponent> = {
  title: "Sidebar",
  component: SidebarComponent,
};

export default meta;
type Story = StoryObj<typeof SidebarComponent>;

export const Sidebar: Story = {};
