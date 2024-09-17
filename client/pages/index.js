import { Box, Container, useBreakpointValue } from "@chakra-ui/react";
import dynamic from "next/dynamic";

// LAYOUT
import DefaultLayout from "../layout/default";

// COMPONENTS
import BookRide from "../components/Dashboard/bookRidePanel";
import MapComp from "../components/map"

// using nextjs dynamic import since window is undefined in next SSR
const Home = () => {
    // Responsive width and display for the aside Box
    const asideWidth = useBreakpointValue({ base: "100%", md: "40%", lg: "30%" });
    const asideDisplay = useBreakpointValue({ base: "block", lg: "block" });

    return (
        <>
            <Box pos={"relative"}>
                <MapComp />

                <Box
                    pos={"absolute"}
                    d={asideDisplay}
                    w={asideWidth}
                    as={"aside"}
                    top={"30px"}
                    left={useBreakpointValue({ base: "0", lg: "30px" })}
                    right={useBreakpointValue({ base: "0", lg: "unset" })}
                    zIndex={999}
                    bg={"white"}
                    pb={"2rem"}
                    rounded={"lg"}
                    m={useBreakpointValue({ base: "30px", lg: "unset" })}
                >
                    <BookRide />
                </Box>
            </Box>
        </>
    );
};

Home.layout = DefaultLayout;

export default Home;