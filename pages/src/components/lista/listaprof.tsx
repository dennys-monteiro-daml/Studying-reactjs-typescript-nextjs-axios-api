import { Button } from "@mui/material";
import { Description, Image, Info, Items, ListaStyled, Name, Value } from "./listaprof.styled";


const ListaProf = () => {
  return(
    <ListaStyled>
      <Items>
        <Image src = "https://github.com/dennys-monteiro-daml.png" ></Image>
        <Info>
          <Name>Dennys Monteiro</Name>
          <Value>$15.600 a year or $1.400 a month, or $40.00 a hour.</Value>
          <Description></Description>
          <Button sx= {{ width: '85%' }}>Send me a menssage!</Button>
          <Button sx= {{ width: '85%' }}>Another Button!</Button>
        </Info>
      </Items>
      <Items>
        <Image src = "https://github.com/dennys-monteiro-daml.png" ></Image>
        <Info>
          <Name>Dennys Monteiro</Name>
          <Value>$15.600 a year or $1.400 a month, or $40.00 a hour.</Value>
          <Description></Description>
          <Button sx= {{ width: '85%' }}>Send me a menssage!</Button>
          <Button sx= {{ width: '85%' }}>Another Button!</Button>
        </Info>
      </Items>
      <Items>
        <Image src = "https://github.com/dennys-monteiro-daml.png" ></Image>
        <Info>
          <Name>Dennys Monteiro</Name>
          <Value>$15.600 a year or $1.400 a month, or $40.00 a hour.</Value>
          <Description></Description>
          <Button sx= {{ width: '85%' }}>Send me a menssage!</Button>
          <Button sx= {{ width: '85%' }}>Another Button!</Button>
        </Info>
      </Items>
      <Items>
        <Image src = "https://github.com/dennys-monteiro-daml.png" ></Image>
        <Info>
          <Name>Dennys Monteiro</Name>
          <Value>$15.600 a year or $1.400 a month, or $40.00 a hour.</Value>
          <Description></Description>
          <Button sx= {{ width: '85%' }}>Send me a menssage!</Button>
          <Button sx= {{ width: '85%' }}>Another Button!</Button>
        </Info>
      </Items>
    </ListaStyled>
  )
}

export default ListaProf;