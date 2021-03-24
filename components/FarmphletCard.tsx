import styled from "styled-components";

type FarmphletCardType = {
    id: any;
    logo: any;
    name: string;
    description: string;
    location: string;
    varieties: string;
    prosessings: string;
}
const FarmphletCard = ({farmphlet}:{farmphlet: FarmphletCardType}) => {
    const {
        logo,
        name,
        description,
        location,
        varieties,
        prosessings
    } = farmphlet;
    return (
        <FarmphletCardBlock>
            <div className="header">
                <img src={logo ? logo : "/logoipsum.png"} alt=""/>
                <div>
                    <h5>{name}</h5>
                    <p>{description}</p>
                </div>
            </div>
            <div className="body">
                <div className="info">
                    <label>Located in: </label>
                    <p>{location}</p>
                </div>

                <div className="info">
                    <label>Varieties:</label>
                    <p>{varieties}</p>
                </div>

                <div className="info">
                    <label>Prosessings:</label>
                    <p>{prosessings}</p>
                </div>
            </div>
        </FarmphletCardBlock>
    )
}


const FarmphletCardBlock = styled.div`
    padding: 20px;
    background: white;
    width: 290px;
    border-radius: 15px;
    color: black;
    >.header {
        display: flex;
        margin-bottom: 30px;
        >img {
            width: 64px;
            height: 64px;
            object-fit: cover;
            border: 1px solid gray;
        }

        >div {
            margin-left: 15px;
            >h5 {
                font-size: 16px;
            }

            >p {
                font-size: 14px;
                color: #767676;
            }
        }
    }

    >.body {
        >.info {
            margin-bottom: 15px;
            >label {
                font-size: 12px;
                color: #8D8D8D;
                margin-bottom: 3px;
            }

            >p {
                font-size: 14px;
            }
        }
    }
`;

export default FarmphletCard;