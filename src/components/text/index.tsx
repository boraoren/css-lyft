import styled from 'styled-components'
import { color,fontFamily } from 'styled-system'

type textProps = {
    color?: string
    fontFamily?: string
}

const Text = styled('p')<textProps>(
    color,
    fontFamily,
)

Text.defaultProps = {
    color: 'black',
    fontFamily: 'tahoma'
}


export default Text