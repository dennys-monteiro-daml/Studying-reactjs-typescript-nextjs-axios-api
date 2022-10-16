import { Button } from "@mui/material";
import { Teacher } from "../../@types/prof";
import { Description, Image, Info, Items, ListaStyled, Name, Value } from "./listaprof.styled";


interface ListaProfs {
  profs:Teacher[], 
}

const ListaProf = (props: ListaProfs) => {
  return(
    <ListaStyled>
      {props.profs.map(prof => 
      <Items>
        <Image src = {prof.img} ></Image>
        <Info>
          <Name>{prof.name}</Name>
          <Value>{prof.value}</Value>
          <Description>{prof.description}</Description>
          <Button sx= {{ width: '85%' }}>Send me a menssage!</Button>
          <Button sx= {{ width: '85%' }}>Another Button!</Button>
        </Info>
      </Items>
      )}  
    </ListaStyled>
  )
}

export default ListaProf;