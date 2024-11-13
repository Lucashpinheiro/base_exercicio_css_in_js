import { FormEvent, useState } from 'react'

import { Campo, Formulario, Pesquisa } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Formulario as="form" onSubmit={aoEnviarForm}>
      <Campo
        as="input"
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Pesquisa as="button" type="submit">
        Pesquisar
      </Pesquisa>
    </Formulario>
  )
}
export default FormVagas
