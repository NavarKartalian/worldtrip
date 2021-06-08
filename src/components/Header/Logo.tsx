import { Image } from '@chakra-ui/react'

export function Logo() {
    return(
        <Image 
            src='/images/logo.svg' 
            alt='worldtrip' 
            maxW={[120, 160, 180]} 
            justifySelf='center' 
            gridColumn="2"
        />
    );
}