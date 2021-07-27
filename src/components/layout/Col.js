import styled from "styled-components"
import PropTypes from "prop-types"

const baseWidth = 10;
//<Col size={6}/> 
export const Col = styled.div`
max-width: ${(props)=> props.size * baseWidth}%;
-webkit-box-flex: 0;
flex: 0;
${(props)=> `ms-flex : 0 0 ${props.size * baseWidth}%`};
${(props)=> `flex : 0 0 ${props.size * baseWidth}%`};
`;

Col.defaultProps={
    size: 12,
}

Col.propTypes={
    size: PropTypes.number,
};
//no evaluamos porque siempre esperamos que nos defina un size, caso contrario
//podemos setearle un valor por default, si no viene un size