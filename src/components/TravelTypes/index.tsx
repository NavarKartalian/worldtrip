import { Box, Text, Grid, GridItem, Icon } from '@chakra-ui/react'
import { BsCircleFill } from 'react-icons/bs'

export function TravelTypes() {
    return(
        
    <Grid
        maxW='768px'
        templateColumns="repeat(2, 1fr)"
        gap={6}
        mx='auto'
        mb='12'
    >
        <GridItem>
            <Text 
                color='#47585B'
                fontSize={['18px', '24px', '36px']}
                fontWeight={['600', '500']}
            >
                <Icon as={BsCircleFill} fontSize={['10px', '14px']} color='#FFBA08' mr={['2', '4']} />
                vida noturna
            </Text>
        </GridItem>

        <GridItem>
            <Text 
                color='#47585B'
                fontSize={['18px', '24px', '36px']}
                fontWeight={['600', '500']}
                textAlign='right'
            >
                <Icon as={BsCircleFill} fontSize={['10px', '14px']} color='#FFBA08' mr={['2', '4']} />
                praia
            </Text>
        </GridItem>

        <GridItem>
            <Text 
                color='#47585B'
                fontSize={['18px', '24px', '36px']}
                fontWeight={['600', '500']}
            >
                <Icon as={BsCircleFill} fontSize={['10px', '14px']} color='#FFBA08' mr={['2', '4']} />
                moderno
            </Text>
        </GridItem>

        <GridItem>
            <Text 
                color='#47585B'
                fontSize={['18px', '24px', '36px']}
                fontWeight={['600', '500']}
                textAlign='right'
            >
                <Icon as={BsCircleFill} fontSize={['10px', '14px']} color='#FFBA08' mr={['2', '4']} />
                clássico
            </Text>
        </GridItem>

        <GridItem colSpan={2} justifySelf='center'>
            <Text 
                color='#47585B'
                fontSize={['18px', '24px', '36px']}
                fontWeight={['600', '500']}
            >
                <Icon as={BsCircleFill} fontSize={['10px', '14px']} color='#FFBA08' mr={['2', '4']} />
                e mais...
            </Text>
        </GridItem>
    </Grid>
    );
}