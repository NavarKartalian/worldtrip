import { Flex, Grid, Icon } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router';
import { Logo } from './Logo'
import { FiChevronLeft } from 'react-icons/fi'
import Link from 'next/link'

export function Header() {
    const { asPath } = useRouter();
    let isHome = true;

    if(asPath.startsWith('/continent')) {
        isHome = false;
    }

    return(
        <Flex
            justify='center'
            align='center'
            py={[4, 6]}
            as='header'
        >
            <Grid
                h="100%"
                mx="auto"
                w="100%"
                maxW="1160px"
                px={['8', '6', '4', '0']}
                alignItems="center"
                templateColumns="repeat(3, 1fr)"
                justifyContent="center"
                alignSelf="start"
            >
                {!! !isHome && 
                        <Link href='/' passHref>
                            <a>
                                <Icon 
                                    as={FiChevronLeft} 
                                    justifySelf='flex-start' 
                                    fontSize={[10,20]}
                                />
                            </a>
                        </Link>
                    }
                    <Logo />
            </Grid>
        </Flex>
    );
}