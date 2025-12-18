import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useInsertProfile } from '../../../hooks/useInsertProfile';
import { toast } from 'react-toastify';
import { useUserProfileStore } from '../../../store/UserProfileStore';
import { InputNumber, InputText } from '../../../ui/Input/input';

interface StatisticsFormData {
    age: string;
    weight: string;
    height: string;
    gender: string;
    experienceLevel: string;
    profession: string;
    physicalLimitations: string;
    medicalIssues: string;
}

const Statistics = () => {
    const defaultValues = {
        age: '',
        weight: '',
        height: '',
        gender: '',
        experienceLevel: '',
        profession: '',
        physicalLimitations: '',
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm<StatisticsFormData>({ defaultValues });
    const { mutate: insertProfile, isPending } = useInsertProfile();

    const userProfile = useUserProfileStore((state) => state.userProfile);

    useEffect(() => {
        const stats = userProfile?.statistics;
        if (!stats) {
            return;
        }

        const dateOfBirthYear = stats.dateOfBirth
            ? new Date(stats.dateOfBirth).getFullYear()
            : null;
        const currentYear = new Date().getFullYear();
        const age = dateOfBirthYear ? currentYear - dateOfBirthYear : '';

        reset({
            age: age?.toString() ?? '',
            weight: stats.weightInLbs?.toString() ?? '',
            height: stats.heightInInches?.toString() ?? '',
            gender: stats.biologicalSex ?? '',
            experienceLevel: stats.experienceLevel ?? '',
            profession: stats.profession ?? '',
            physicalLimitations: stats.chronicPhysicalLimitations ?? '',
            medicalIssues: stats.medicalIssues ?? '',
        });
    }, [reset, userProfile?.statistics]);

    const onSubmit = (data: StatisticsFormData) => {
        if (!userProfile?.id) {
            toast.error('User not found. Please log in again.');
            return;
        }

        // Convert age to DateOfBirth
        const age = parseInt(data.age);
        if (isNaN(age) || age < 0 || age > 100) {
            toast.error('Please enter a valid age');
            return;
        }
        const currentYear = new Date().getFullYear();
        const birthYear = currentYear - age;
        const dateOfBirth = new Date(birthYear, 0, 1).toISOString();

        // Convert weight and height to numbers
        const weightInLbs = parseFloat(data.weight);
        const heightInInches = parseFloat(data.height);

        if (isNaN(weightInLbs) || weightInLbs <= 0) {
            toast.error('Please enter a valid weight');
            return;
        }

        if (isNaN(heightInInches) || heightInInches <= 0) {
            toast.error('Please enter a valid height');
            return;
        }

        if (!data.gender) {
            toast.error('Please select your gender');
            return;
        }

        insertProfile(
            {
                userId: userProfile?.id,
                dateOfBirth,
                weightInLbs,
                heightInInches,
                biologicalSex: data.gender,
                experienceLevel: data.experienceLevel || null,
                profession: data.profession || null,
                chronicPhysicalLimitations: data.physicalLimitations || null,
                medicalIssues: data.medicalIssues || null,
            },
            {
                onSuccess: () => {
                    toast.success('Profile saved successfully!');
                },
                onError: (error: unknown) => {
                    toast.error('Failed to save profile. Please try again.');
                    console.error('Save profile error:', error);
                },
            }
        );
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 items-center justify-center w-full max-w-md mx-auto p-4"
        >
            <InputNumber
                {...register('age', { required: 'Age is required' })}
                name="age"
                label="Your Age"
                placeholder=""
                size="lg"
                className="text-sm"
                error={errors.age}
            />

            <InputNumber
                {...register('weight', { required: 'Weight is required' })}
                name="weight"
                label="Your Weight (lbs)"
                placeholder=""
                size="lg"
                className="text-sm"
                error={errors.weight}
            />

            <InputNumber
                {...register('height', { required: 'Height is required' })}
                name="height"
                label="Your Height (inches)"
                placeholder=""
                size="lg"
                className="text-sm"
                error={errors.height}
            />

            <label className="dui-label w-full">
                <span className="dui-label-text">Your Gender</span>
            </label>
            <div className="dui-filter w-full">
                <input
                    className="btn btn-square"
                    type="reset"
                    value="×"
                    onClick={(e) => {
                        e.preventDefault();
                        setValue('gender', '');
                    }}
                />
                <input
                    {...register('gender', {
                        required: 'Please select your gender',
                    })}
                    className="dui-btn"
                    type="radio"
                    name="gender"
                    value="Female"
                    aria-label="Female"
                />
                <input
                    {...register('gender')}
                    className="dui-btn"
                    type="radio"
                    name="gender"
                    value="Male"
                    aria-label="Male"
                />
                <input
                    {...register('gender')}
                    className="dui-btn"
                    type="radio"
                    name="gender"
                    value="Other"
                    aria-label="Other"
                />
            </div>
            {errors.gender && (
                <span className="text-error text-sm">
                    {errors.gender.message}
                </span>
            )}

            <label className="dui-label w-full">
                <span className="dui-label-text">Your Experience Level</span>
            </label>
            <div className="dui-filter w-full">
                <input
                    className="btn btn-square"
                    type="reset"
                    value="×"
                    onClick={(e) => {
                        e.preventDefault();
                        setValue('experienceLevel', '');
                    }}
                />
                <input
                    {...register('experienceLevel')}
                    className="dui-btn"
                    type="radio"
                    name="experienceLevel"
                    value="Beginner"
                    aria-label="Beginner"
                />
                <input
                    {...register('experienceLevel')}
                    className="dui-btn"
                    type="radio"
                    name="experienceLevel"
                    value="Intermediate"
                    aria-label="Intermediate"
                />
                <input
                    {...register('experienceLevel')}
                    className="dui-btn"
                    type="radio"
                    name="experienceLevel"
                    value="Advanced"
                    aria-label="Advanced"
                />
            </div>

            <InputText
                {...register('profession', {
                    required: 'Profession is required',
                })}
                name="profession"
                label="What is your profession?"
                placeholder="Enter your profession"
                size="lg"
                className="text-sm"
                error={errors.profession}
            />

            <InputText
                {...register('physicalLimitations', {
                    required: 'Physical limitations are required',
                })}
                name="physicalLimitations"
                label="Do you have any chronic physical limitations?"
                placeholder="Enter your physical limitations"
                size="lg"
                className="text-sm"
                error={errors.physicalLimitations}
            />

            <InputText
                {...register('medicalIssues', {
                    required: 'Medical issues are required',
                })}
                name="medicalIssues"
                label="Do you have any medical issues?"
                placeholder="Enter your medical issues"
                size="lg"
                className="text-sm"
                error={errors.medicalIssues}
            />

            <button
                type="submit"
                className="dui-btn dui-btn-primary w-full mt-4"
                disabled={isPending}
            >
                {isPending ? 'Saving...' : 'Save Profile'}
            </button>
        </form>
    );
};

export default Statistics;
