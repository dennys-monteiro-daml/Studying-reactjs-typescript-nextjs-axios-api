import { Box } from '@mui/material';
import type { NextPage } from 'next'
import ListaProf from "./src/components/lista/listaprof";

const Home: NextPage = () => {
  return (
    <Box sx= {{ backgroundColor: 'secondary.main'}}>
      <ListaProf></ListaProf>
    </Box>
  )
}

export default Home;