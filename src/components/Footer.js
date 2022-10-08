import styled from "styled-components"

export default function Footer(props) {
    return(
        <Foot>
            {props.children}
        </Foot>
    )
}

const Foot = styled.div`

`;