function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="grow">
                <div className="my-10">
                    <div className="flex flex-col gap-20">
                        <Equipment />
                        <div className="mx-20 dui-divider"></div>
                        <Goals />
                        <div className="mx-20 dui-divider"></div>
                        <Actions />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;

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
