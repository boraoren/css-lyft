import styled from 'styled-components'
import { width, height } from 'styled-system'

type svgProps = {
    width: string
    height: string
    viewBox?: string
}


const Svg = styled('svg')<svgProps>(
    {
        fill: "currentColor",
        preserveAspectRatio: "xMidYMid meet",
        verticalAlign: 'middle'
    },
    width,
    height,
)


Svg.defaultProps = {
  viewBox: '0 0 72 50'
}

export default Svg