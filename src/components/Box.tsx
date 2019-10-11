import styled from 'styled-components'
import { space, layout, color, fontSize }  from 'styled-system'

type BoxProps ={
    space?: string,
    layout?: string,
    color: string,
    fontSize: number[],
}

const Box = styled.div<BoxProps>`
  ${color},
  ${space},
  ${layout},
  ${fontSize}
`

export default Box