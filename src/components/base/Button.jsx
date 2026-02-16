const BASE_BUTTON_CLASS = [
    "cursor-pointer",
    "no-underline",
    "text-[#7C7D7E]",
    "fill-[#7C7D7E]",
    "bg-white",
    "border",
    "border-[#C8C8C8]",
    "rounded-[8px]",
    "px-5",
    "py-2",
    "font-light",
    "transition-colors",
    "hover:text-white",
    "hover:bg-red-600",
].join(" ");

const DISABLED_CLASS = "opacity-60 cursor-not-allowed hover:bg-white hover:text-[#7C7D7E]";

export default function Button({
                                   text,
                                   children,
                                   onClick,
                                   type = "button",
                                   className = "",
                                   disabled = false,
                               }) {
    const content = children ?? text;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={[BASE_BUTTON_CLASS, disabled ? DISABLED_CLASS : "", className]
                .filter(Boolean)
                .join(" ")}
        >
            {content}
        </button>
    );
}
