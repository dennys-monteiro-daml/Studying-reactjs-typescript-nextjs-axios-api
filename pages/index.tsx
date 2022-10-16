import { Box } from '@mui/material';
import type { NextPage } from 'next'
import { Teacher } from './src/@types/prof';
import ListaProf from "./src/components/lista/listaprof";


const Home: NextPage = () => {
  const profs: Teacher [] = [
    {
      id: 1,
      name: "Teacher One",
      img: "https://github.com/dennys-monteiro-daml.png",
      description: "Professional, please, describe your abilyties and skills heres, for first impressions.",
      value: 50,
    },
    {
      id: 2,
      name: "Teacher Two",
      img: "https://github.com/dennys-monteiro-daml.png",
      description: "Professional, please, describe your abilyties and skills heres, for first impressions.",
      value: 100,
    },
    {
      id: 3,
      name: "Teacher Three",
      img: "https://github.com/dennys-monteiro-daml.png",
      description: "Professional, please, describe your abilyties and skills heres, for first impressions.",
      value: 150,
    },
    {
      id: 4,
      name: "Teacher Four",
      img: "https://github.com/dennys-monteiro-daml.png",
      description: "Professional, please, describe your abilyties and skills heres, for first impressions.",
      value: 200,
    }
  ]

  return (
    <Box sx= {{ backgroundColor: 'secondary.main'}}>
      <ListaProf profs = {profs} ></ListaProf>
    </Box>
  )
}

export default Home;