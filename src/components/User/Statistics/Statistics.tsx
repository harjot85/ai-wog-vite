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

            <label className="dui-label">
                <span className="dui-label">What is your profession?</span>
            </label>
            <input
                name="profession"
                type="text"
                placeholder="Enter your profession"
                className="dui-input"
            />

            <label className="dui-label">
                <span className="dui-label">
                    Do you have any physical limitations?
                </span>
            </label>
            <input
                name="physicalLimitations"
                type="text"
                placeholder="Enter your physical limitations"
                className="dui-input"
            />

            <label className="dui-label">
                <span className="dui-label">
                    Tell us what type of exercises you like to do?
                </span>
            </label>
            <input
                name="exercisePreferences"
                type="text"
                placeholder="Enter your exercise preferences"
                className="dui-input"
            />
        </div>
    );
};

export default Statistics;
