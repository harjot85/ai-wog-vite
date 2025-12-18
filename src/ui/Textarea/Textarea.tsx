interface TextareaProps {
    name: string;
    className: string;
    label: string;
    placeholder: string;
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = ({
    name,
    className,
    label,
    placeholder,
    onChange,
    size,
}: TextareaProps) => {
    const classNames = `w-full dui-textarea rounded-none dui-textarea-${size} ${className}`;
    return (
        <>
            <label className="w-full dui-label">
                <span className="dui-label">{label}</span>
            </label>
            <textarea
                name={name}
                className={classNames}
                placeholder={placeholder}
                onChange={onChange}
            />
        </>
    );
};
