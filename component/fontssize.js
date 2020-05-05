import React from 'react';
import {Text} from 'react-native';

const Fontsize=({children})=>{

    return(
        <Text
            style={{
                fontSize:20,
                fontWeight:'bold'
            }}
        >
            {children}
        </Text>
    )


}

export default Fontsize
