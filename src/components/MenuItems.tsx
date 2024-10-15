import { Button } from "antd";
import styled from "styled-components";

type Orientation = "vertical" | "horizontal";
type ButtonTypes =
  | "link"
  | "text"
  | "default"
  | "primary"
  | "dashed"
  | undefined;

interface MenuItemsProps {
  items: any[];
  orientation?: Orientation;
}

const Container = styled.span<{ orientation?: Orientation }>`
  display: flex;
  gap: 1.8rem;
  flex-direction: ${({ orientation }) =>
    orientation === "horizontal" ? "row" : "column"};
`;

function MenuItems({ items, orientation = "horizontal" }: MenuItemsProps) {
  const typetwo = ({
    label,
    onClick,
    type,
  }: {
    label: string;
    onClick: () => void;
    type?: ButtonTypes;
  }) => (
    <Button key={label} onClick={onClick} size="large" type={type}>
      {label}
    </Button>
  );

  return <Container orientation={orientation}>{items.map(typetwo)}</Container>;
}

export default MenuItems;
