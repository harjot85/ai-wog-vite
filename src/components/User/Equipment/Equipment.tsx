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

export default Equipment;
