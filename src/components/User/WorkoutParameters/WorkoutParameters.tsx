import { useState } from 'react';
import type { workoutPreferences } from '../../../pages/Home';
import { InputText } from '../../../ui/Input/Input';
import { Textarea } from '../../../ui/Textarea/Textarea';

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
        <div className="flex flex-col gap-4 items-center justify-center w-full max-w-md mx-auto p-4">
            <Textarea
                name="goals"
                label="What is your most important Goal at this time?"
                placeholder=""
                size="lg"
                className="text-sm"
                onChange={handleGoalChange}
            />

            <InputText
                name="daysperweek"
                label="How many days can you realistically commit each week?"
                placeholder=""
                size="lg"
                className="text-sm"
                onChange={handleDaysPerWeekChange}
            />
            <InputText
                name="minsperworkout"
                label="Preferred workout duration (in minutes)"
                placeholder=""
                size="lg"
                className="text-sm"
                onChange={handleWorkoutDurationChange}
            />
            <InputText
                name="exercisePreferences"
                label=" Tell us what type of exercises you like to do?"
                placeholder="Enter your exercise preferences"
                size="lg"
                className="text-sm"
                onChange={handleExercisePreferencesChange}
            />
        </div>
    );
};

export default WorkoutParameters;
