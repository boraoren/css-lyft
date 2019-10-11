import * as React from 'react';
import styled from 'styled-components';

const Test = styled.div`
    background-color: red;
`
const Item = () => {
    return (
        <Test>
            <p>ITEM1234</p>
        </Test>
    )
};

export default Item;