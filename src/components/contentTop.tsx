import React from "react";
import {RounderBox} from "./primitives";
import {Image, Text} from "@chakra-ui/react";

interface Props {
    description: string;
}

const ContentTop: React.FC<Props> = ({description}) => {
    return (
        <RounderBox
            height="150px"
            bgImage="./header.png"
            bgSize="cover"
            bgRepeat="no-repeat"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
        >
            <Image
                src="data:image/png;base64,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"
                width="100px"
            >
            </Image>
            <Text
                fontSize="16px"
                color="#34314c"
            >
                {description}
            </Text>
        </RounderBox>
    );
};

export default ContentTop;
