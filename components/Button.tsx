interface ButtonProps {
    label: string;
    secondary?: boolean;
    fullWidth?: boolean;
    large?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    label,
    secondary,
    fullWidth,
    large,
    onClick,
    disabled,
    outline

                                       }) => {
    return (
        <button
        className={`
            ${fullWidth ? "w-full" : "w-fit"}
            ${secondary ? "bg-white" : "bg-sky-500"}
            ${secondary ? "text-black" : "text-white"}
            ${secondary ? "border-black" : "border-sky-500"}
            ${large ? 'text-xl' : 'text-md'}
            ${large ? 'px-5' : 'px-4'}
            ${large ? 'py-3' : 'py-2'}
            ${outline ? 'bg-transparent' : ''}
            ${outline ? 'bg-white' : ''}
            ${outline ? 'text-white' : ''}
            rounded-2xl
            font-semibold
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
            duration-200
            ease-in-out
            hover:bg-primary-600
            hover:border-primary-900
            hover:rounded-3xl
            focus:outline-none
            focus:ring-2
            focus:ring-primary-500
            focus:ring-opacity-50
        `}
        onClick={onClick}
        disabled={disabled}

        >
            {label}
        </button>
    );
}

export default Button;
