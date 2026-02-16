const WRAPPER_CLASS = "flex items-center gap-2";

const ITEM_LINK_BASE_CLASS = [
    "flex h-[45px] w-[45px] md:h-[55px] md:w-[55px] items-center justify-center rounded-full",
    "bg-[#b8b8b8] transition",
].join(" ");

const ICON_35_CLASS = "h-[35px] w-[35px] fill-white";

const SOCIALS = [
    {
        id: "telegram",
        label: "Telegram",
        href: "#",
        hoverClassName: "hover:bg-[#229ED9]",
        icon: (
            <svg
                className={ICON_35_CLASS}
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z"
                    fill="#ffffff"
                />
            </svg>
        ),
    },
    {
        id: "instagram",
        label: "Instagram",
        href: "#",
        hoverClassName:
            "hover:bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]",
        icon: (
            <svg viewBox="0 0 24 24" className={ICON_35_CLASS} aria-hidden="true">
                <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm8.4 2H7.8A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4z" />
                <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                <path d="M17.5 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
        ),
    },
    {
        id: "facebook",
        label: "Facebook",
        href: "#",
        hoverClassName: "hover:bg-[#1877F2]",
        icon: (
            <svg viewBox="0 0 24 24" className={ICON_35_CLASS} aria-hidden="true">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-2.9h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.3h-1.1c-1.1 0-1.4.7-1.4 1.4v1.7H16l-.4 2.9h-2.1v7A10 10 0 0 0 22 12z" />
            </svg>
        ),
    },
    {
        id: "aparat",
        label: "Aparat",
        href: "#",
        hoverClassName: "hover:bg-[#ED145B]",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="h-[45px] w-[45px]"
                fill="none"
                aria-hidden="true"
            >
                <g fill="white">
                    <path d="M21.881 6.136l-4.315-.974c-3.52-.795-7.017 1.414-7.812 4.934l-.983 4.351C11.603 9.95 16.357 6.788 21.881 6.136zM6.136 26.119l-.974 4.315c-.795 3.52 1.414 7.017 4.934 7.812l4.351.983C9.95 36.396 6.788 31.643 6.136 26.119zM37.904 9.754l-4.351-.983c4.497 2.832 7.659 7.586 8.311 13.109l.974-4.315C43.633 14.047 41.424 10.549 37.904 9.754zM26.119 41.864l4.315.974c3.52.795 7.017-1.414 7.812-4.934l.983-4.351C36.397 38.05 31.643 41.212 26.119 41.864z" />
                    <path d="M24 8C15.163 8 8 15.163 8 24s7.163 16 16 16 16-7.163 16-16S32.837 8 24 8zm-4 5c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zm-3 19c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm5-8c0-1.105.895-2 2-2s2 .895 2 2-.895 2-2 2-2-.895-2-2zm6 11c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm3-11c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
                </g>
            </svg>
        ),
    },
    {
        id: "gmail",
        label: "Gmail",
        href: "mailto:example@gmail.com",
        hoverClassName: "hover:bg-[#EA4335]",
        icon: (
            <svg viewBox="0 0 24 24" className={ICON_35_CLASS} aria-hidden="true">
                <path d="M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.2-8 5-8-5V6l8 5 8-5v2.2z" />
            </svg>
        ),
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        href: "#",
        hoverClassName: "hover:bg-[#0A66C2]",
        icon: (
            <svg viewBox="0 0 24 24" className={ICON_35_CLASS} aria-hidden="true">
                <path d="M6.5 6.8A1.9 1.9 0 1 1 6.5 3a1.9 1.9 0 0 1 0 3.8zM4.7 21h3.6V9H4.7v12zM9.8 9h3.4v1.6h.1c.5-.9 1.8-1.9 3.7-1.9 3.9 0 4.6 2.6 4.6 5.9V21H18v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9.8V9z" />
            </svg>
        ),
    },
];

export default function SocialIcons() {
    return (
        <ul className={WRAPPER_CLASS}>
            {SOCIALS.map((social) => (
                <li key={social.id}>
                    <a
                        href={social.href}
                        aria-label={social.label}
                        className={`${ITEM_LINK_BASE_CLASS} ${social.hoverClassName}`}
                    >
                        {social.icon}
                    </a>
                </li>
            ))}
        </ul>
    );
}
