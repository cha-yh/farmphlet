import styled from "styled-components";

const Nav = () => {
    return (
        <NavBlock>
            <p>LOGO</p>

            <span className="material-icons">menu</span>

        </NavBlock>
    )
}

const NavBlock = styled.nav`
    width: 100%;
    height: 4rem;
    background: #012E00;
    position: fixed;
    top: 0;
    padding: 1rem;
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