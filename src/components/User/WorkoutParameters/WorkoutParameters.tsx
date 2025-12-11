import { useState } from 'react';
import type { workoutPreferences } from '../../../pages/Home';

interface WorkoutParameterProps {
    setWorkoutPreferences: (preferences: workoutPreferences) => void;
}

const WorkoutParameters = ({
    setWorkoutPreferences,
}: WorkoutParameterProps) => {
    const [preferences, setPreferences] = useState<workoutPreferences>({
        goal: '',
        numberOfDays: '',
        workoutDuration: '',
        exercisePreferences: '',
    });

    const updatePreferences = (
        field: keyof workoutPreferences,
        value: string
    ) => {
        const updated = { ...preferences, [field]: value };
        setPreferences(updated);
        setWorkoutPreferences(updated);
    };

    const handleGoalChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        updatePreferences('goal', e.target.value);
    };

    const handleDaysPerWeekChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        updatePreferences('numberOfDays', e.target.value);
    };

    const handleWorkoutDurationChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        updatePreferences('workoutDuration', e.target.value);
    };

    const handleExercisePreferencesChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        updatePreferences('exercisePreferences', e.target.value);
    };

    return (
        // TODO: Breakdown the goals into smaller questions like PTs do in that form
        <div className="flex flex-col gap-4 items-center justify-center">
            <label className="dui-label">
                <span className="dui-label">
                    What is your most important Goal at this time?
                </span>
            </label>
            <textarea
                name="goals"
                placeholder=""
                className="dui-textarea "
                onChange={handleGoalChange}
            />

            <label className="dui-label">
                <span className="dui-label">
                    How many days can you realistically commit each week?
                </span>
            </label>
            <input
                name="daysperweek"
                placeholder=""
                className="dui-input"
                onChange={handleDaysPerWeekChange}
            />

            <label className="dui-label">
                <span className="dui-label">
                    Preferred workout duration (in minutes)
                </span>
            </label>
            <input
                name="minsperworkout"
                placeholder=""
                className="dui-input "
                onChange={handleWorkoutDurationChange}
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
                onChange={handleExercisePreferencesChange}
            />
        </div>
    );
};

export default WorkoutParameters;
