import { RegisterFarmphletMain, RegisterSection } from "../../styles/register-farmphlet";
import { useRouter } from 'next/router'

const RegisterFarmphlet = () => {
    const router = useRouter();
    const phase = Number(router.query.phase);
    const cancel = () => {
        console.log('cancel')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
    }

    const goToNext = (e) => {
        e.preventDefault();
        router.push(`/register-farmphlet?phase=${phase+1}`, undefined, { shallow: true });
    }
    const goToPrev = () => {
        router.push(`/register-farmphlet?phase=${phase-1}`, undefined, { shallow: true });
    }
    return (
        <RegisterFarmphletMain>
            <RegisterSection>
                {phase === 1 &&
                    <div className="form-box farm__info">
                        <h1>Enter Farm Information</h1>
                        <form onSubmit={goToNext}>
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

                            <div className="input-box base__info">
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
                                <button type="button" onClick={cancel}>Cancel</button>
                                <button>Next</button>
                            </div>
                        </form>
                    </div>
                }

                {phase === 2 && 
                    <div className="form-box contact__info">
                        <h1>Enter Contact Information</h1>
                        <form onSubmit={goToNext}>
                            <div className="input-box">
                                <label>
                                    Email
                                    <input type="text" name="name" />
                                </label>

                                <label>
                                    Phone
                                    <input type="text" name="name" />
                                </label>

                                <label>
                                    Website
                                    <input type="text" name="name" />
                                </label>

                                <label>
                                    Address
                                    <input type="text" name="name" />
                                </label>

                                <label>
                                    Instagram
                                    <input type="text" name="name" />
                                </label>

                                <label>
                                    Facebook
                                    <input type="text" name="name" />
                                </label>

                                <label>
                                    Twitter
                                    <input type="text" name="name" />
                                </label>

                                <label>
                                    Other
                                    <input type="text" name="name" />
                                </label>
                            </div>
                            <div className="button-wrapper">
                                <button type="button" onClick={goToPrev}>Prev</button>
                                <button>Next</button>
                            </div>
                        </form>
                    </div>
                }

                {phase === 3 &&
                    <div className="form-box contact__info">
                        <h1>Introduce Your Farm</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="input-box"></div>

                            <div className="button-wrapper">
                                <button type="button" onClick={goToPrev}>Prev</button>
                                <button>Confirm</button>
                            </div>
                        </form>
                    </div>


                }
            </RegisterSection>
        </RegisterFarmphletMain>
    )
}

export default RegisterFarmphlet;