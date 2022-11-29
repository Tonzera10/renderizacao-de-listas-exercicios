import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal,
  TarefaConcluida,
  TextoRiscadoEOpaco
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [concluido, setConcluido] = useState([])

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    if(novaTarefa.length < 3){
      return alert("Tá faltando caracteres poha")
    };
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const adicionarTarefaComEnter = (e) => {
    if(e.keyCode === 13) {
      e.preventDefault();
      if(novaTarefa.length < 3){
        return alert("Tá faltando caracteres poha")
      };
      const novaLista = [...lista, novaTarefa];
      setLista(novaLista);
      setNovaTarefa("");
    }
  }

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) => item !== tarefa);
    setLista(listaFiltrada);
    const listaConcluida = lista.filter((item) => item === tarefa);
    setConcluido([...concluido, listaConcluida])
  };


  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyUp={(e) => adicionarTarefaComEnter(e)}
        />
        <AddTaskButton onClick={adicionaTarefa} >Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>

      <LinhaHorizontal/>
      <ul>
          {concluido.map((tarefa, index) => {
            return (
              <TarefaConcluida key={index}>
                <TextoRiscadoEOpaco>{tarefa}</TextoRiscadoEOpaco>
              </TarefaConcluida>
            );
          })}
        </ul>
    </ListaTarefasContainer>
  );
}
