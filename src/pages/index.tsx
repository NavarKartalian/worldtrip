import Head from 'next/head';
import { Header } from '../components/Header';
import { Box, Flex, Text, Stack, Image, SimpleGrid } from '@chakra-ui/react'
import { useBreakpointValue } from "@chakra-ui/react"
import { Slider } from '../components/Slider';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
    const isMobile = useBreakpointValue({
        base: true,
        md: true,
        lg: false,
        
    })

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <Header />

            <Flex 
                backgroundImage='/images/Background.svg' 
                backgroundRepeat='no-repeat' 
                backgroundSize='cover'
                py={['16']}
                px={['5', '28']}
                justifyContent='space-between'
                maxH={{md: '308'}}
            >
                <Stack spacing={3} maxW='480'>
                    <Text 
                        color='white' 
                        fontSize={['20', '36']} 
                        lineHeight={['30px', '54px']} 
                        fontWeight='500'
                    >
                        5 Continentes,<br /> infinitas possibilidades.
                    </Text>

                    <Text 
                        color='#DADADA;' 
                        fontSize={['14', '20']} 
                        fontWeight='300' 
                        lineHeight={['21px', '30px']}
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
                    </Text>
                </Stack>
                
                { !! !isMobile &&
                    <Box position='relative' top='-5'>
                        <Image src='images/Airplane.svg'/>
                    </Box>
                }
            </Flex>

            <Box mt={['16', '28']} mb='12' px={['8', '16']}>
                { !! !isMobile && <Image src='images/Travel types.svg' mx='auto' pb='20'/>}

                {!! isMobile && <TravelTypes />}
                
                <Box 
                    borderBottom='2px' 
                    margin='0 auto' 
                    width={['60px','90px']} 
                    borderColor='#47585B' 
                />
            </Box>

            <Box>
                <Text 
                    color='#47585B' 
                    fontSize={['20', '36']} 
                    fontWeight='500' align='center' 
                    lineHeight={['30px', '54px']}
                >
                    Vamos nessa?<br/> Então escolha seu continente
                </Text>
            </Box>

            <Slider />
        </>
    );
}