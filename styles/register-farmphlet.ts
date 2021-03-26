import styled, {css} from "styled-components";

const inputStyle = css`
    height: 40px;
    padding: 0 12px;
    border: 1px solid #B1B1B1;
    border-radius: 4px;
`;

const buttonStyle = css`
    height: 40px;
    padding: 0 20px;
    border: none;
    cursor: pointer;
`;

export const RegisterFarmphletMain = styled.main`
    padding-top: 64px;
`;

export const RegisterSection = styled.section`
    width: 680px;
    margin: 60px auto;
    padding: 40px;
    font-size: 14px;
    background: white;
    border-radius: 10px;
    >.form-box {
        >h1 {
            font-size: 36px;
            font-weight: 700;
            margin-bottom: 40px;
        }
        >form {

            >.input-box {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                >label {
                    display: flex;
                    flex-direction: column;
                    
                    margin-bottom: 30px;
                    >input {
                        ${inputStyle}
                        width: 290px;
                    }
                }
            }

            >.button-wrapper {
                width: 100%;
                margin-top: 40px;
                display: flex;
                justify-content: flex-end;
                >:first-child {
                    margin-right: 20px;
                }
                >button {
                    ${buttonStyle}
                }
            }
        }
    }
    >.farm__info {
        >form {
            
            >.main__info {
                display: flex;        
                margin-bottom: 50px;

                >.main__inputs {
                    display: flex;
                    flex-direction: column;

                    >:nth-child(2) {
                        margin: 15px 0;
                    }
                    >input {
                        ${inputStyle}
                    }
                }

                >.main__preview {
                    
                    /* height: 100%; 하니깐 자식의 크기로 높이가 정의됨 */ 
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    background: #ECECEC;
                    margin-left: 30px;
                    >.preview__label {
                        position: absolute;
                        top: 0; right: 0;
                        background: #005C0F;
                        color: white;
                        padding: 2px;
                    }
                    >.preview__box {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        >img {
                            width: 64px;
                            height: 64px;
                            margin-right: 20px;
                        }
                        >div {
                            >h5 {
                                font-weight: 700;
                                font-size: 16px;
                            }
                            >p {
                                color: #767676;
                            }
                        }
                    }

                }
                
            }

            

            
        }
    }
`;