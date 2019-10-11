import styled from 'styled-components'
import {
    fontSize,
    lineHeight,
} from 'styled-system'

type TextProps = {
    fontSize: any[],
    lineHeight: string,
    m: number,
}

const Text = styled('div')<TextProps>(
    fontSize,
    lineHeight,
)

export default Text