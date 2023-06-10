import EventCard from "../components/ui/eventCard/eventCard";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof EventCard> = {
    title: "EventCard",
    component: EventCard,
};

export default meta;
type Story = StoryObj<typeof EventCard>;

export const Regular: Story = {};
