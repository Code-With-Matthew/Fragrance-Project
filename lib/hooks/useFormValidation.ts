import { useForm, type FieldValues } from 'react-hook-form'

export const useAppForm = <T extends FieldValues>() => {
  const form = useForm<T>({
    mode: 'onChange',
    reValidateMode: 'onChange'
  })

  const emailValidation = {
    required: 'Email wajib diisi',
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Format email tidak valid'
    }
  }

  const passwordValidation = {
    required: 'Password wajib diisi',
    minLength: {
      value: 6,
      message: 'Password minimal 6 karakter'
    }
  }

  return {
    ...form,
    emailValidation,
    passwordValidation
  }
}