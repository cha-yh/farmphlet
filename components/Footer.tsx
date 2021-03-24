import styled from "styled-components";

const Footer = () => {
    return (
        <FooterBlock>
            <h1>Farmphlet</h1>
            <p className="contact">Contact: email@gmail.com</p>
            <p className="copyright">© Copyright - Farmphlet 2021</p>
        </FooterBlock>
    )
}

const FooterBlock = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #06443B;
    color: white;
    padding: 50px;

    >h1 {
        
    }

    >.contact {
        font-size: 14px;
        margin-top: 20px;
        margin-bottom: 50px;
    }

    >.copyright {
        font-size: 14px;
    }
`;

export default Footer;