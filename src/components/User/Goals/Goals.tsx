const Goals = () => {
    return (
        // TODO: Breakdown the goals into smaller questions like PTs do in that form
        <div className="flex flex-col gap-4 items-center justify-center">
            <label className="dui-label">
                <span className="dui-label">What are your Goals?</span>
            </label>
            <textarea name="goals" placeholder="" className="dui-textarea " />

            <label className="dui-label">
                <span className="dui-label">
                    How many days can you realistically commit each week?
                </span>
            </label>
            <input name="daysperweek" placeholder="" className="dui-input " />

            <label className="dui-label">
                <span className="dui-label">
                    Preferred workout duration (in minutes)
                </span>
            </label>
            <input
                name="minsperworkout"
                placeholder=""
                className="dui-input "
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

export default Goals;
