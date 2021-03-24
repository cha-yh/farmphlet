import styled from "styled-components";

const Nav = () => {
    return (
        <Container>
            <NavBlock>
                <p>LOGO</p>

                <span className="material-icons">menu</span>

            </NavBlock>
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: center;
    background: #07574c;
    position: fixed;
    top: 0;
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04);
`;

const NavBlock = styled.nav`
    max-width: 920px;
    width: 90%;
    height: 4rem;
    padding: 1rem 0;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    >p {

    }
    >span.material-icons {
        cursor: pointer;
        &:hover {
            color: gray;
        }
    }
`;

export default Nav;