import logoFa from "../../assets/images/logo-fr.png";
import MobileMenu from "./MobileMenu.jsx";

const NAV_LINKS = [
    { id: "home", label: "صفحه اصلی", href: "/" },
    { id: "golestan", label: "شرکت گلستان", href: "/about" },
    { id: "products", label: "محصولات", href: "/products" },
    { id: "blog", label: "وبلاگ", href: "/blog" },
    { id: "lottery", label: "قرعه کشی", href: "/lottery" },
    { id: "jobs", label: "استخدام", href: "/careers" },
    { id: "contact", label: "تماس با ما", href: "/contact" },
    { id: "language", label: "EN", href: "/" },
];

const NAV_CLASS = "fixed top-0 w-full overflow-visible border-b border-white/20 bg-[#262626] p-4 lg:px-5 lg:pt-8 lg:pb-5 text-[#AFB2B4] z-200";
const CONTAINER_CLASS = "mx-auto max-w-6xl px-4";
const INNER_CLASS = "flex items-center justify-center gap-30 lg:gap-14 flex-col-reverse md:flex-col lg:flex-row px-2";
const MOBILE_MENU_WRAPPER_CLASS = "flex self-start";
const LOGO_LINK_CLASS = "relative lg:h-0 w-[170px] shrink-0 overflow-visible";
const LOGO_IMG_CLASS = "absolute lg:bottom-0 lg:h-[105px] lg:w-[170px] lg:translate-y-[97px]";
const LIST_CLASS = "hidden md:flex items-center justify-center";
const LIST_ITEM_CLASS = "flex items-center";
const LINK_CLASS = "inline-block px-5 py-3 transition hover:text-white";
const DIVIDER_CLASS = "h-6 w-px bg-white/30 hidden lg:flex";

export default function Navbar() {
    return (
        <nav className={NAV_CLASS}>
            <div className={CONTAINER_CLASS}>
                <div className={INNER_CLASS}>
                    {/* Navbar Icon */}
                    <div className={MOBILE_MENU_WRAPPER_CLASS}>
                        <MobileMenu links={NAV_LINKS} />
                    </div>

                    {/* Navbar Logo */}
                    <a href="/" className={LOGO_LINK_CLASS} aria-label="Home">
                        <img src={logoFa} alt="Golestan" className={LOGO_IMG_CLASS} />
                    </a>

                    {/* Navbar List */}
                    <ul className={LIST_CLASS}>
                        {NAV_LINKS.map((item, idx) => {
                            const showDivider = idx !== NAV_LINKS.length - 1;

                            return (
                                <li key={item.id} className={LIST_ITEM_CLASS}>
                                    <a href={item.href} className={LINK_CLASS}>
                                        {item.label}
                                    </a>

                                    {showDivider && <span className={DIVIDER_CLASS} />}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
