import { TodoModel } from "@/models/todoModel"

export interface TodoModalFormProps {
  isModalOpen: boolean,
  setIsModalOpen: Function,
  refetchTodos: Function,
  todoEdit: TodoModel,
  resetTodoEdit: () => void
}

export type dataForm = {
  title: string,
  description: string
}

export type errorForm = {
  title: boolean,
  description: boolean
}