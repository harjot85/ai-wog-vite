import { useForm } from 'react-hook-form';
import { useInsertProfile } from '../../../hooks/useInsertProfile';
import { toast } from 'react-toastify';

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
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<StatisticsFormData>();
    const { mutate: insertProfile, isPending } = useInsertProfile();

    // Get userId from localStorage
    const getUser = () => {
        const userStr = localStorage.getItem('user');
        if (userStr) {
            try {
                return JSON.parse(userStr);
            } catch {
                return null;
            }
        }
        return null;
    };

    const onSubmit = (data: StatisticsFormData) => {
        const user = getUser();
        if (!user || !user.id) {
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
                userId: user.id,
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
                    toast.success('Profile inserted successfully!');
                },
                onError: (error: unknown) => {
                    toast.error('Failed to insert profile. Please try again.');
                    console.error('Insert profile error:', error);
                },
            }
        );
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 items-center justify-center w-full max-w-md mx-auto p-4"
        >
            <label className="dui-label w-full">
                <span className="dui-label-text">Your Age</span>
            </label>
            <input
                {...register('age', { required: 'Age is required' })}
                type="number"
                placeholder="Enter your age"
                className="dui-input dui-input-bordered w-full"
                min="0"
                max="150"
            />
            {errors.age && (
                <span className="text-error text-sm">{errors.age.message}</span>
            )}

            <label className="dui-label w-full">
                <span className="dui-label-text">Your Weight (lbs)</span>
            </label>
            <input
                {...register('weight', { required: 'Weight is required' })}
                type="number"
                step="0.1"
                placeholder="Enter Your Weight"
                className="dui-input dui-input-bordered w-full"
                min="0"
            />
            {errors.weight && (
                <span className="text-error text-sm">
                    {errors.weight.message}
                </span>
            )}

            <label className="dui-label w-full">
                <span className="dui-label-text">Your Height (inches)</span>
            </label>
            <input
                {...register('height', { required: 'Height is required' })}
                type="number"
                step="0.1"
                placeholder="Enter Your Height"
                className="dui-input dui-input-bordered w-full"
                min="0"
            />
            {errors.height && (
                <span className="text-error text-sm">
                    {errors.height.message}
                </span>
            )}

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

            <label className="dui-label w-full flex flex-col gap-0">
                <span className="dui-label-text">What is your profession?</span>
                <span className="text-sm italic text-base-content/70">
                    (This tells us how active or sedentary your day is)
                </span>
            </label>
            <input
                {...register('profession')}
                type="text"
                placeholder="Enter your profession"
                className="dui-input dui-input-bordered w-full"
            />

            <label className="dui-label w-full">
                <span className="dui-label-text">
                    Do you have any chronic physical limitations?
                </span>
            </label>
            <input
                {...register('physicalLimitations')}
                type="text"
                placeholder="Enter your physical limitations"
                className="dui-input dui-input-bordered w-full"
            />

            <label className="dui-label w-full">
                <span className="dui-label-text">
                    Do you have any medical issues?
                </span>
            </label>
            <input
                {...register('medicalIssues')}
                type="text"
                placeholder="Enter any medical issues"
                className="dui-input dui-input-bordered w-full"
            />

            <button
                type="submit"
                className="dui-btn dui-btn-primary w-full mt-4"
                disabled={isPending}
            >
                {isPending ? 'Inserting...' : 'Insert Profile'}
            </button>
        </form>
    );
};

export default Statistics;
