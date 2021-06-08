import { Box, Text, Flex, Image, Stack } from '@chakra-ui/react'

interface CardProps {
    image: string;
    flag: string;
    title: string;
    subTitle: string;
    alt?: string;
}

export function Cards({ image, flag, title, subTitle,alt }: CardProps) {
    return(
        <>
            <Box w="256px" h="279px" borderRadius='6px' backgroundColor='#e8e8e8'>
                <Box w='100%' h='173px' bgImage={image} />

                <Stack direction='row' align='center' justify='space-between' mt='4' px='4'>
                    <Flex flexDir='column'>
                        <Text color='#47585B' fontSize='20px' fontWeight='600'>{title}</Text>
                        <Text color='#909090' fontSize='16px' fontWeight='400' mt='2'>{subTitle}</Text>
                    </Flex>
                    
                    <Image src={flag} w='30px' h='30px' borderRadius='full' alt={alt} />
                </Stack>
            </Box>
        </>
    );
}