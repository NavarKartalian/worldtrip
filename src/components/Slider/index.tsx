import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
SwiperCore.use([Pagination, Navigation, A11y, Autoplay]);

export function Slider() {
    return(
        <Flex
            w='100%'
            maxW='1240px'
            mx='auto'
            mb={['5', '10']}
            h={['250px', '450px']}
            mt='10'
            
        >
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                style={{width: '100%', flex: '1'}}
                autoplay={{delay: 5000}}
            >
                <SwiperSlide>
                    <Flex
                        width='100%'
                        bgImage='images/continents/Europe.svg'
                        backgroundSize='cover'
                        backgroundPosition='center'
                        bgRepeat='no-repeat'
                        h='100%'
                        textAlign='center'
                        align='center'
                        justify='center'
                    >
                        <Link href='/continent/Europe'>
                            <a>
                                <Text 
                                    color='white'
                                    fontSize={['24px', '48px']}
                                    fontWeight='bold'
                                >
                                    Europa
                                </Text>
                                <Text 
                                    color='white'
                                    fontSize={['14px', '24px']}
                                    mt={['2', '4']}
                                >
                                    O continente mais antigo
                                </Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex
                        width='100%'
                        bgImage='images/continents/Asia.svg'
                        backgroundSize='cover'
                        backgroundPosition='center'
                        bgRepeat='no-repeat'
                        h='100%'
                        textAlign='center'
                        align='center'
                        justify='center'
                    >
                        <Link href='/continent/Asia'>
                            <a>
                                <Text 
                                    color='white'
                                    fontSize={['24px', '48px']}
                                    fontWeight='bold'
                                >
                                    Asia
                                </Text>
                                <Text 
                                    color='white'
                                    fontSize={['14px', '24px']}
                                    mt={['2', '4']}
                                >
                                    Continente de contrastes
                                </Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex
                        width='100%'
                        bgImage='images/continents/Oceania.svg'
                        backgroundSize='cover'
                        backgroundPosition='center'
                        bgRepeat='no-repeat'
                        h='100%'
                        textAlign='center'
                        align='center'
                        justify='center'
                    >
                        <Link href='/continent/Oceania'>
                            <a>
                                <Text 
                                    color='white'
                                    fontSize={['24px', '48px']}
                                    fontWeight='bold'
                                >
                                    Oceania
                                </Text>
                                <Text 
                                    color='white'
                                    fontSize={['14px', '24px']}
                                    mt={['2', '4']}
                                >
                                    Lar de criaturas pré históricas
                                </Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex
                        width='100%'
                        bgImage='images/continents/Africa.svg'
                        backgroundSize='cover'
                        backgroundPosition='center'
                        bgRepeat='no-repeat'
                        h='100%'
                        textAlign='center'
                        align='center'
                        justify='center'
                    >
                        <Link href='/continent/Africa'>
                            <a>
                                <Text 
                                    color='white'
                                    fontSize={['24px', '48px']}
                                    fontWeight='bold'
                                >
                                    Africa
                                </Text>
                                <Text 
                                    color='white'
                                    fontSize={['14px', '24px']}
                                    mt={['2', '4']}
                                >
                                    Berço da humanidade
                                </Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex
                        width='100%'
                        bgImage='images/continents/NorthAmerica.svg'
                        backgroundSize='cover'
                        backgroundPosition='center'
                        bgRepeat='no-repeat'
                        h='100%'
                        textAlign='center'
                        align='center'
                        justify='center'
                    >
                        <Link href='/continent/NorthAmerica'>
                            <a>
                                <Text 
                                    color='white'
                                    fontSize={['24px', '48px']}
                                    fontWeight='bold'
                                >
                                    America do Norte
                                </Text>
                                <Text 
                                    color='white'
                                    fontSize={['14px', '24px']}
                                    mt={['2', '4']}
                                >
                                    Centro do mundo
                                </Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex
                        width='100%'
                        bgImage='images/continents/SouthAmerica.svg'
                        backgroundSize='cover'
                        backgroundPosition='center'
                        bgRepeat='no-repeat'
                        h='100%'
                        textAlign='center'
                        align='center'
                        justify='center'
                    >
                        <Link href='/continent/SouthAmerica'>
                            <a>
                                <Text 
                                    color='white'
                                    fontSize={['24px', '48px']}
                                    fontWeight='bold'
                                >
                                    America do Sul
                                </Text>
                                <Text 
                                    color='white'
                                    fontSize={['14px', '24px']}
                                    mt={['2', '4']}
                                >
                                    Continente de mistérios
                                </Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>
            </Swiper>
        </Flex>
    );
}