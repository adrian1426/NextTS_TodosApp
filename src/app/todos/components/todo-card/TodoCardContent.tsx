import { Montserrat } from 'next/font/google';

export const monserrat = Montserrat({
  subsets: ['latin'],
  weight: "500"
});

interface TodoCardContentProps {
  description: string,
  idStatusTodo: number,
  date: string
}

const TodoCardContent = (props: TodoCardContentProps) => {
  const { description, idStatusTodo, date } = props;

  const textDateInfo = idStatusTodo === 1 ? "Fecha de inicio: " : "Fecha de finalización: ";

  return (
    <div>
      <div
        style={{
          backgroundColor: "#f8f8f8",
          borderRadius: "5px",
          padding: "10px",
          display: "flex",
          flexWrap: "wrap",
          height: "86px",
          overflowY: "auto"
        }}
      >
        <label className={`${monserrat.className}`}>
          {description}
        </label>
      </div>

      <br />

      <h4 className={`${monserrat.className}`}>
        {textDateInfo} {date}
      </h4>

      <br />
    </div >
  );
};

export default TodoCardContent;