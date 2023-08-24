import { Meta, StoryObj } from "@storybook/react";
import TableComponent from "./TableComponent";
import { Provider } from "react-redux";
import store from "../../store/store";

const meta: Meta<typeof TableComponent> = {
  title: 'Project/Table',
  tags: ['autodocs'],
  component: TableComponent,
}

export default meta;

type Story = StoryObj<typeof TableComponent>;

export const Basic: Story = {
  render: () => (
    <Provider store={store}>
      <TableComponent />
    </Provider>
  )
}