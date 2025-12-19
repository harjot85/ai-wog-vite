import type { FieldError } from 'react-hook-form';

interface InputProps {
    name: string;
    className: string;
    label: string;
    placeholder: string;
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    error?: FieldError | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = ({
    name,
    className,
    label,
    placeholder,
    onChange,
    size,
    ...rest
}: InputProps & Record<string, any>) => {
    const classNames = `w-full dui-input rounded-none dui-input-${size} ${className}`;
    return (
        <>
            <label className="w-full dui-label">
                <span className="dui-label">{label}</span>
            </label>
            <input
                name={name}
                type={'text'}
                className={classNames}
                placeholder={placeholder}
                onChange={onChange}
                {...rest}
            />
        </>
    );
};

export const InputPassword = ({
    name,
    className,
    label,
    placeholder,
    onChange,
    size,
}: InputProps) => {
    const classNames = `w-full dui-input rounded-none dui-input-${size} ${className}`;
    return (
        <>
            <label className="w-full dui-label">
                <span className="dui-label">{label}</span>
            </label>
            <input
                name={name}
                type={'password'}
                className={classNames}
                placeholder={placeholder}
                onChange={onChange}
            />
        </>
    );
};

export const InputNumber = ({
    name,
    className,
    label,
    placeholder,
    onChange,
    size,
    error,
    ...rest
}: InputProps & Record<string, any>) => {
    const classNames = `w-full dui-input rounded-none dui-input-${size} ${className}`;
    return (
        <>
            <label className="w-full dui-label">
                <span className="dui-label">{label}</span>
            </label>
            <input
                name={name}
                type={'number'}
                className={classNames}
                placeholder={placeholder}
                onChange={onChange}
                {...rest}
            />
            {error && (
                <span className="text-error text-sm">{error.message}</span>
            )}
        </>
    );
};
