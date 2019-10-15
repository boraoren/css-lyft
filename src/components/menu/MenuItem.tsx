import * as React from 'react';
import Text from '../text';

type itemProps = {
    text: string
    color?: string
    fontFamily?: string
}


const MenuItem: React.FC<itemProps> = ({text, fontFamily, color}) => {
    return (
        <Text color={color} fontFamily={fontFamily}>
            {text}
        </Text>
    )
};

MenuItem.defaultProps ={
    color: 'black',
    fontFamily: 'Open Sans , sans-serif',
}

export default MenuItem;