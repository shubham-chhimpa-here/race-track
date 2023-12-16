import { Box, Tooltip } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataContextProvider";
import { transform } from "framer-motion";




export default function Path({i, speed, name}) {
    const {runner} = useContext(DataContext);
    const [state, setState] = useState(runner)
    const styleSheet = document.styleSheets[0];
    const keyframesRule = styleSheet.insertRule(`@keyframes circle${i} {
        0% {
            transform: rotate(0deg) translate(-${(200 + i * 50) / 2 - 10}px) rotate(0deg);
        }
          
        100% {
            transform: rotate(360deg) translate(-${(200 + i * 50) / 2 - 10}px) rotate(-360deg);
        } 
    }`, styleSheet.cssRules.length);
    return (
        <Box pos={'absolute'} width={`${200 + i * 50}px`} aspectRatio={1} border={'22px solid #ddd'} 
        
            _before={{
                content: `""`,
                position: 'absolute',
                left: 0,
                top: '50%',
               transform:'translate(-100%, -50%)',
                width:'20px',
                color: 'white',
                backgroundColor: 'green',
                padding: '1px',
              }}
        
        margin={'auto'}
        // top={'50%'}
        // left={'50%'}
        inset={0}
        // transform={'translate(-50%, -50%)'}
        rounded={'full'}>
            <Tooltip label={'here'}>

            <Box width={'20px'} aspectRatio={1} rounded={'full'} bg={'red'}
            pos={'absolute'}
            margin={'auto'}
            inset={0}
            // top={'50%'}
            // left={'50%'}
            // transform={'translate(-50%, -50%)'}
            
            border={'1px solid #ddd'}
            animation={`circle${i} ${1000/speed}s linear forwards`}
            ></Box>
            </Tooltip>
        </Box>
    )
}