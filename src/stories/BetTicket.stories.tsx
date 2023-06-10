import { Meta, StoryObj } from "@storybook/react";
import BetCard from "../components/ui/betTicket/betCard";

const meta: Meta<typeof BetCard> = {
  title: "Bet card",
  component: BetCard,
};

export default meta;
type Story = StoryObj<typeof BetCard>;

export const BetCardStory: Story = {};
