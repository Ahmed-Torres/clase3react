import styled from "styled-components"
import {atomicPx} from "../../constants/layout"
import PropTypes  from "prop-types"

export const Container = styled.div`
    width:100%;
    height:11rem;
    ${(props)=>props.height && `height: ${props.height * atomicPx}`}
    padding: 0 15px;
    margin: o auto;
`;

Container.propTypes={
    height: PropTypes.number
}
