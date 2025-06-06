import * as Yup from 'yup'

export const schemaTodo = Yup.object({
  taskName: Yup.string().max(200).required("Task is required"),
});