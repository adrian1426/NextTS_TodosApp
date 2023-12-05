export interface TodoModalFormProps {
  isModalOpen: boolean,
  setIsModalOpen: Function,
  refetchTodos: Function
}

export type dataForm = {
  title: string,
  description: string
}

export type errorForm = {
  title: boolean,
  description: boolean
}