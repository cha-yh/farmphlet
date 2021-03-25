import styled from "styled-components";
import { RegisterFarmphletMain, RegisterSection } from "../../styles/register-farmphlet";

const RegisterFarmphlet = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit')
    }
    return (
        <RegisterFarmphletMain>
            <RegisterSection>
                <h1>Enter Farm Information</h1>
                <form onSubmit={handleSubmit}>
                    <div className="main__info">
                        <div className="main__inputs">
                            <input type="text" placeholder="Upload Farm Logo"/>
                            <input type="text" placeholder="Enter Farm Name"/>
                            <input type="text" placeholder="Enter Farm Description"/>
                        </div>
                        <div className="main__preview">
                            <span className="preview__label">preview</span>
                            <div className="preview__box">
                                <img src="" alt=""/>
                                <div>
                                    <h5>Farm Name</h5>
                                    <p>Description</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="base__info">
                        <label>
                            Origin *
                            <input type="text" name="name" />
                        </label>

                        <label>
                            Region *
                            <input type="text" name="name" />
                        </label>

                        <label>
                            Varieties
                            <input type="text" name="name" />
                        </label>

                        <label>
                            Processings
                            <input type="text" name="name" />
                        </label>

                        <label>
                            Total Product Amount
                            <input type="text" name="name" />
                        </label>

                        <label>
                            Export to (countries)
                            <input type="text" name="name" />
                        </label>
                    </div>

                    <div className="button-wrapper">
                        <button>Cancel</button>
                        <button>Submit</button>
                    </div>
                </form>
            </RegisterSection>
        </RegisterFarmphletMain>
    )
}

export default RegisterFarmphlet;