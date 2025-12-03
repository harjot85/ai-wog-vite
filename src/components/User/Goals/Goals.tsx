const Goals = () => {
    return (
        // TODO: Breakdown the goals into smaller questions like PTs do in that form
        <div className="flex flex-col gap-4 items-center justify-center">
            <label className="dui-label">
                <span className="dui-label">What are your Goals?</span>
            </label>
            <textarea name="goals" placeholder="" className="dui-textarea " />
        </div>
    );
};

export default Goals;
