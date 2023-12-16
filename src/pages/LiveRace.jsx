import { Box, layoutPropNames } from "@chakra-ui/react";
import Path from "../components/Path";
import { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";

export default function LiveRace() {
    const {runner} = useContext(DataContext);
    // const runner = [1,1,1,1,1,1,1,1,1,1,1]
    return (
        <Box position={'fixed'} inset={0} 
        overflow={'auto'}
        // border={'10px solid red'}
        >
            {
                runner.map((item, i) => <Path i={i} key={i}
                speed={item.speed}
                name={item.name}
                />)
            }
        </Box>
    )
}