import {getArmorsList} from "../../api/armor";
import {useQuery} from "@tanstack/react-query";
import {Box, CircularProgress, Grid2, Typography} from "@mui/material";
import React from "react";

type ArmorsList = {
  success: boolean;
  count: number;
  data: [{
    id: number,
    name: string;
    image: string;
    description: string;
    category: string;
    dmgNegation: [{
      name: string;
      amount: number;
    }];
    resistance: [{
      name: string;
      amount: number;
    }];
    weight: number
  }];
}

const Armors: React.FC = () => {
  const {data: armorsList} = useQuery<ArmorsList, any>({
    queryKey: ['ArmorsList'],
    queryFn: getArmorsList,
  })


  //test
  return (
    <Box padding={'10px'}>
      <Typography marginBottom={'20px'} textAlign={"center"} variant={'h3'}>Armors</Typography>
      <Grid2 container spacing={2}>
        {armorsList?.success ? armorsList.data.map((el) => {
          return (
            <Grid2 display='flex' alignItems={'center'} size={{xs: 12, md: 6}} key={el.id} border={'1px solid black'}
                   borderRadius={'15px'}>
              <Box display={"flex"} alignItems={"center"} height={'100%'} borderRight={'1px solid black'}>
                <img src={el.image} alt={'armorImg'}/>
              </Box>
              <Box marginLeft={'10px'}>
                <Typography>Category: <b>{el.category}</b></Typography>
                <Typography>Name: <b>{el.name}</b></Typography>
                <Typography>Description: <b>{el.description}</b></Typography>
              </Box>
            </Grid2>
          )
        }) : <Box width={'100%'} height={'100%'} display='flex' justifyContent={'center'}><CircularProgress/></Box>}
      </Grid2>
    </Box>
  )
}

export default Armors