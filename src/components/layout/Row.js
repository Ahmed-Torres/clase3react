import PropTypes  from "prop-types"
import styled from "styled-components"
import {justifyValues, numberType, atomicPx} from "../../constants/layout"


//       "entonces"
//condicion && verdadero
export const Row = styled.div`
    display: flex;
    flex-direction: column;
    ${(props)=> props.justify && `justify-content : ${props.justify}`};// <Row justify="center" />
    ${(props)=> props.mt && `margin-top : ${props.mt * atomicPx}`};
    ${(props)=> props.mb && `margin-bottom : ${props.mb * atomicPx}`}
    ${(props)=> props.align && `align-items : ${props.align}`}
`

Row.propTypes={
    justify : PropTypes.oneOf(justifyValues),
    mt: numberType,
    mb: numberType,
}