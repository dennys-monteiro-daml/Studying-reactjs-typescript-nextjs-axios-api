import { Button } from "@mui/material";
import { Teacher } from "../../@types/prof";
import { Dscrpt, Image, Info, Items, ListaStyled, Name, NoResults, Value } from "./listaprof.styled";


interface ListaProfs {
  profs: Teacher[],
}

// Exemplo de componente usando array e vice-versa:
const ListaProf = (props: ListaProfs) => {
  return (
    <div>
      {props.profs.length > 0 ? (
            <ListaStyled>
              {props.profs.map( prof => (
            <Items key={prof.id}>
              <Image src = {prof.img} ></Image>
              <Info>
                <Name>{prof.name}</Name>
                <Value>{prof.value.toLocaleString('pt-BR', {minimumFractionDigits: 2,style: 'currency', currency:'usd'})} </Value>
                <Dscrpt>{prof.description}</Dscrpt>
                <Button sx= {{ width: '85%' }}>Send me a menssage!</Button>
                <Button sx= {{ width: '85%' }}>Second Button!</Button>
              </Info>
            </Items>
            ))}
          </ListaStyled>
      ) : (
        <NoResults><p>We can't find what are you looking for!</p></NoResults>
      )}
    </div>
    )
  }

  export default ListaProf;