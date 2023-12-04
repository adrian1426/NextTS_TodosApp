import { Badge } from 'antd';

interface TodoCardTitleProps {
  title: string,
  idStatusTodo: number
}

const TodoCardTitle = (props: TodoCardTitleProps) => {
  const { title, idStatusTodo } = props;

  const colorBadge = idStatusTodo === 1 ? "#00A6FF" : "#05ca30";
  const titleBadge = idStatusTodo === 1 ? "En proceso" : "Completado";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 5px"
      }}
    >
      <span>{title}</span>

      <Badge
        style={{ backgroundColor: colorBadge, borderColor: colorBadge }}
        count={titleBadge}
      />
    </div>
  );
};

export default TodoCardTitle;