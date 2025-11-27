import { Footer } from '../components/Footer/Footer';
import Header from '../components/Header/Header';

function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="grow">
                <div className="my-10">
                    <div className="flex flex-col gap-20">
                        <Statistics />
                        <div className="mx-20 dui-divider"></div>
                        <Equipment />
                        <div className="mx-20 dui-divider"></div>
                        <Goals />
                        <div className="mx-20 dui-divider"></div>
                        <Actions />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Home;

const Statistics = () => {
    return (
        <div className="flex flex-col gap-4 items-center justify-center">
            <label className="dui-label">
                <span className="dui-label">Your Age</span>
            </label>
            <input
                name="age"
                type="text"
                placeholder="Enter your age"
                className="dui-input"
            />

            <label className="dui-label">
                <span className="dui-label">Your Weight</span>
            </label>
            <input
                name="weight"
                type="text"
                placeholder="Enter Your Weight"
                className="dui-input"
            />

            <label className="dui-label">
                <span className="dui-label">Your Height</span>
            </label>
            <input
                name="height"
                type="text"
                placeholder="Enter Your Height"
                className="dui-input"
            />

            <label className="dui-label">
                <span className="dui-label">Your Gender</span>
            </label>
            <form className="dui-filter">
                <input className="btn btn-square" type="reset" value="x" />
                <input
                    className="dui-btn"
                    type="radio"
                    name="frameworks"
                    aria-label="Female"
                />
                <input
                    className="dui-btn"
                    type="radio"
                    name="frameworks"
                    aria-label="Male"
                />
                <input
                    className="dui-btn"
                    type="radio"
                    name="frameworks"
                    aria-label="Other"
                />
            </form>

            <label className="dui-label">
                <span className="dui-label">Your Experience Level</span>
            </label>
            <form className="dui-filter">
                <input className="btn btn-square" type="reset" value="x" />
                <input
                    className="dui-btn"
                    type="radio"
                    name="frameworks"
                    aria-label="Beginner"
                />
                <input
                    className="dui-btn"
                    type="radio"
                    name="frameworks"
                    aria-label="Intermediate"
                />
                <input
                    className="dui-btn"
                    type="radio"
                    name="frameworks"
                    aria-label="Advanced"
                />
            </form>
        </div>
    );
};

const Equipment = () => {
    return (
        <div className="flex flex-col gap-4 items-center justify-center">
            <label className="dui-label">
                <span className="dui-label">What Equipment do you have</span>
            </label>
            <input
                name="equipment"
                type="text"
                placeholder=""
                className="dui-input"
            />
        </div>
    );
};

const Goals = () => {
    return (
        <div className="flex flex-col gap-4 items-center justify-center">
            <label className="dui-label">
                <span className="dui-label">What are your Goals?</span>
            </label>
            <textarea name="goals" placeholder="" className="dui-textarea " />
        </div>
    );
};

const Actions = () => {
    return (
        <div className="flex flex-col gap-4 items-center justify-center">
            <button className="dui-btn dui-btn-primary dui-btn-wide text-lg py-6 ">
                Generate with AI
            </button>
        </div>
    );
};
