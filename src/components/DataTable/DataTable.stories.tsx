import type { Meta, StoryObj } from "@storybook/react";
import { DataTable, type DataTableProps } from "./DataTable";

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

const sampleData: User[] = [
  { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
  { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
  { id: 3, name: "Charlie", age: 28, email: "charlie@example.com" },
];

const meta: Meta<DataTableProps<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<DataTableProps<User>>;

export const Default: Story = {
  args: {
    data: sampleData,
    columns: [
      { key: "name", title: "Name", dataIndex: "name", sortable: true },
      { key: "age", title: "Age", dataIndex: "age", sortable: true },
      { key: "email", title: "Email", dataIndex: "email" },
    ],
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns: [
      { key: "name", title: "Name", dataIndex: "name" },
      { key: "age", title: "Age", dataIndex: "age" },
    ],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: [
      { key: "name", title: "Name", dataIndex: "name" },
      { key: "age", title: "Age", dataIndex: "age" },
    ],
  },
};

export const Selectable: Story = {
  args: {
    data: sampleData,
    columns: [
      { key: "name", title: "Name", dataIndex: "name" },
      { key: "email", title: "Email", dataIndex: "email" },
    ],
    selectable: true,
  },
};
