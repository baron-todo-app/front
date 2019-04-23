import * as Yup from 'yup'
import { message } from '../../share/message'
import { apiMap } from '../../config/apiMap'
import { dto } from '../../share/config'

export const validationSchema = {
  title: Yup.string()
    .max(
      dto.task.input.title.length,
      `${apiMap.title}を${dto.task.input.title.length}${
        message.dto.task.addTask.title.maxLength.message
      }`
    )
    .required(
      `${apiMap.title}${message.dto.task.addTask.title.isNotEmpty.message}`
    ),

  body: Yup.string().max(
    dto.task.input.body.length,
    `${apiMap.body}を${dto.task.input.body.length}${
      message.dto.task.addTask.body.maxLength.message
    }`
  )
}
