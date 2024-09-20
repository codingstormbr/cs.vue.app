import * as yup from 'yup'

yup.setLocale({
  mixed: {
    required: 'campo obrigatório',
    oneOf: 'deve ser um dos seguintes valores: ${values}',
    notOneOf: 'não pode ser um dos seguintes valores: ${values}'
  },
  string: {
    length: 'deve ter exatamente ${length} caracteres',
    min: 'deve ter pelo menos ${min} caracteres',
    max: 'deve ter no máximo ${max} caracteres',
    matches: 'deve corresponder ao padrão: "${regex}"',
    email: 'deve ser um email válido',
    url: 'deve ser uma URL válida',
    trim: 'não deve conter espaços no início ou no fim',
    lowercase: 'deve estar em letras minúsculas',
    uppercase: 'deve estar em letras maiúsculas'
  },
  number: {
    min: 'deve ser no mínimo ${min}',
    max: 'deve ser no máximo ${max}',
    lessThan: 'deve ser menor que ${less}',
    moreThan: 'deve ser maior que ${more}',
    positive: 'deve ser um número positivo',
    negative: 'deve ser um número negativo',
    integer: 'deve ser um número inteiro'
  },
  date: {
    min: 'deve ser maior que a data ${min}',
    max: 'deve ser menor que a data ${max}'
  },
  array: {
    min: 'deve ter pelo menos ${min} itens',
    max: 'deve ter no máximo ${max} itens'
  }
})

/** -------------------------------------------- */

const cellRegex = /^\(\d{2}\) 9 \d{4}-\d{4}$/

export { yup, cellRegex }
