import { Flex, Text } from '@chakra-ui/react'

interface BannerProps {
    title?: string;
    image: string;
}

export function Banner({ image, title }: BannerProps) {
    return(
        <Flex
            w='100%'
            h={['150px', '300px', '400px', '500px']}
            bgImage={image}
            bgRepeat='no-repeat'
            bgSize='cover'
            bgPosition='center'
            align={['center', 'center', 'flex-end']}
            justify={['center', 'center', 'flex-start']}
            px={['0', '40']}
            py={['0', '20']}
        >
            <Text
                color='white'
                fontSize={['28px', '48px']}
                fontWeight='600'
            >
                {title}
            </Text>
        </Flex>
    );
}