import { useState } from 'react';
import Equipment from '../components/User/Equipment/Equipment';
import WorkoutParameters from '../components/User/WorkoutParameters/WorkoutParameters';
import { useFitnessPlan } from '../hooks/useFitnessPlan';

export interface workoutPreferences {
    goal: string;
    numberOfDays: string;
    workoutDuration: string;
    exercisePreferences: string;
}

const defaultWorkoutPreferences = {
    goal: '',
    numberOfDays: '',
    workoutDuration: '',
    exercisePreferences: '',
};

function Home() {
    const [equipment, setEquipment] = useState<string[]>([]);
    const [workoutPreferences, setWorkoutPreferences] =
        useState<workoutPreferences>(defaultWorkoutPreferences);

    return (
        <div className="flex flex-col min-h-screen">
            <main className="grow">
                <div className="my-10">
                    <div className="flex flex-col gap-20">
                        <Equipment setEquipment={setEquipment} />
                        <div className="mx-20 dui-divider"></div>
                        <WorkoutParameters
                            setWorkoutPreferences={setWorkoutPreferences}
                        />
                        <div className="mx-20 dui-divider"></div>
                        <Actions
                            equipment={equipment}
                            workoutPreferences={workoutPreferences}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;

export interface FitnessPlanParameters {
    workoutPreferences: workoutPreferences;
    equipment: string[];
}

const Actions = ({ workoutPreferences, equipment }: FitnessPlanParameters) => {
    console.log('workoutPreferences', workoutPreferences);
    console.log('equipment', equipment);

    const { mutate: generateFitnessPlan } = useFitnessPlan();

    const handleFitnessPlanGenerate = () => {
        generateFitnessPlan(
            { workoutPreferences, equipment },
            {
                onSuccess: (data) => {
                    console.log('Fitness plan generated:', data);
                },
                onError: (error) => {
                    console.log('Fitness plan generation failed:', error);
                },
            }
        );
    };

    return (
        <div className="flex flex-col gap-4 items-center justify-center">
            <button
                className="dui-btn dui-btn-primary dui-btn-wide text-lg py-6 "
                onClick={handleFitnessPlanGenerate}
            >
                Generate with AI
            </button>
        </div>
    );
};
