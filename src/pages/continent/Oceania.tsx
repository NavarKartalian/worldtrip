import { Flex, Text, Box, Stack, Icon, Tooltip, Grid } from '@chakra-ui/react'
import { FiInfo } from 'react-icons/fi'
import { Banner } from '../../components/Banner';
import { Cards } from '../../components/Cards';
import { Header } from '../../components/Header';


export default function Oceania() {
    return(
        <>
            <Header />

            <Banner image='/images/OceaniaBanner.svg' title='Oceania' />

            <Flex
                maxW='1240px'
                mx='auto'
                mt={['4', '12', '20']}
                p={['4', '8']}
            >
                <Stack
                    spacing={16}
                    direction={['column', 'column', 'column', 'row']}
                    align='center'
                    mx='auto'
                >
                    <Text
                        maxW={['343px', '600px']}
                        fontSize={['14px', '24px']}
                        fontWeight='400'
                        lineHeight={['21px', '36px']}
                        textAlign='justify'
                        color='#47585B'
                    >
                        A Oceania é o continente mais isolado do mundo, sua barreira geográfica fez com que fosse o último a ser descoberto pelos europeus. 
                        Em razão desse atraso em seu descobrimento ficou conhecido como "mundo novo". O continente mais isolado do mundo é composto pela Austrália, 
                        Nova Zelândia e Papua Nova Guiné. Sua configuração corresponde a um enorme arquipélago, com formação derivada de erupções vulcânicas. 
                        É cercado pelo Oceano Índico a oeste e Pacífico a norte, leste e sul.
                    </Text>

                    <Stack
                        spacing={[12, 16]} 
                        direction='row'
                    >
                        <Box textAlign={['center']} lineHeight={['36px', '42px']}>
                            <Text color='#FFBA08' fontSize={['24px', '48px']} fontWeight='600'>22</Text>
                            <Text color='#47585B' fontSize={['14px', '24px']} fontWeight='600'>países</Text>
                        </Box>

                        <Box textAlign={['center']} lineHeight={['36px', '42px']}>
                            <Text color='#FFBA08' fontSize={['24px', '48px']} fontWeight='600'>7</Text>
                            <Text color='#47585B' fontSize={['14px', '24px']} fontWeight='600'>línguas</Text>
                        </Box>

                        <Box textAlign={['center']} lineHeight={['36px', '42px']}>
                            <Text color='#FFBA08' fontSize={['24px', '48px']} fontWeight='600'>3</Text>
                            <Text color='#47585B' fontSize={['14px', '24px']} fontWeight='600'>
                                cidades +100 
                                <Tooltip hasArrow label="100 cidades mais visitadas do mundo" bg="gray.300" color="black">
                                    <span>
                                        <Icon as={FiInfo} fontSize='24px' pl='2' color='#999999' />
                                    </span>
                                </Tooltip>
                            </Text>
                        </Box>
                    </Stack>
                </Stack>
            </Flex>

            <Stack
                maxW='1240px'
                mx='auto'
                mt={['0', '8', '12', '16']}
                p={['4', '8']}
                direction='column'
            >
                <Text 
                    fontSize={['24px', '36px']} 
                    color='#47585B' 
                    fontWeight='500' 
                    mb={['4', '8']} 
                    textAlign={['inherit', 'center', 'center', 'inherit']}>
                        Cidades +100
                </Text>

                <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]} gap={[6, 8]} alignSelf='center'>
                    <Cards 
                        flag='/images/flags/UK.svg' 
                        image='/images/cities/Londres.svg' 
                        title='Londres'
                        subTitle='Reino Unido'
                        alt='UK'
                    />

                    <Cards 
                        flag='/images/flags/FR.svg' 
                        image='/images/cities/Paris.svg' 
                        title='Paris'
                        subTitle='França'
                        alt='FR'
                    />

                    <Cards 
                        flag='/images/flags/IT.svg' 
                        image='/images/cities/Roma.svg' 
                        title='Roma'
                        subTitle='Itália'
                        alt='IT'
                    />

                    <Cards 
                        flag='/images/flags/CZ.svg' 
                        image='/images/cities/Praga.svg' 
                        title='Praga'
                        subTitle='República Tcheca'
                        alt='CZ'
                    />

                    <Cards 
                        flag='/images/flags/HL.svg' 
                        image='/images/cities/Amsterdã.svg' 
                        title='Amsterdã'
                        subTitle='Holanda'
                        alt='HL'
                    />
                </Grid>
            </Stack>
        </>
    );
}