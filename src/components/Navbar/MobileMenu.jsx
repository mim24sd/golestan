import { useState } from "react";

const WRAPPER_CLASS = "flex flex-col gap-16 pb-4 md:hidden";
const HAMBURGER_BTN_CLASS = "group fixed right-4 top-30 z-50 size-min cursor-pointer items-center justify-center rounded-lg";
const HAMBURGER_INNER_CLASS = "relative flex justify-end h-5 w-6";
const LINE_BASE_CLASS = "absolute left-0 h-[2px] w-full rounded bg-white transition duration-200";
const LINE_TOP_CLOSED_CLASS = "top-0";
const LINE_TOP_OPEN_CLASS = "top-1/2 -translate-y-1/2 rotate-45";
const LINE_MIDDLE_BASE_CLASS = "top-1/2 -translate-y-1/2";
const LINE_MIDDLE_OPEN_CLASS = "opacity-0";
const LINE_MIDDLE_CLOSED_CLASS = "opacity-100";
const LINE_BOTTOM_CLOSED_CLASS = "bottom-0";
const LINE_BOTTOM_OPEN_CLASS = "top-1/2 -translate-y-1/2 -rotate-45 bottom-auto";
const DROPDOWN_BASE_CLASS = "left-0 text-white transition origin-top";
const DROPDOWN_OPEN_CLASS = "mt-3 scale-100 opacity-100";
const DROPDOWN_CLOSED_CLASS = "hidden bg-transparent border-transparent shadow-none pointer-events-none scale-95 opacity-0";
const LIST_CLASS = "py-2 flex-col";
const LINK_CLASS = "block px-4 py-3 hover:bg-white/5 hover:text-white";

export default function MobileMenu({ links = [] }) {
    const [open, setOpen] = useState(false);

    const finalLinks =
        links.length > 0
            ? links
            : [
                { id: "home", label: "صفحه اصلی", href: "/" },
                { id: "golestan", label: "شرکت گلستان", href: "/about" },
                { id: "products", label: "محصولات", href: "/products" },
                { id: "contact", label: "تماس با ما", href: "/contact" },
            ];

    return (
        <div className={WRAPPER_CLASS}>
            {/* Button Hamburger */}
            <div
                role="button"
                tabIndex={0}
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setOpen((v) => !v);
                }}
                className={HAMBURGER_BTN_CLASS}
            >
                <div className={HAMBURGER_INNER_CLASS}>
          <span
              className={[
                  LINE_BASE_CLASS,
                  LINE_TOP_CLOSED_CLASS,
                  open ? LINE_TOP_OPEN_CLASS : "",
              ].join(" ")}
          />
                    <span
                        className={[
                            LINE_BASE_CLASS,
                            LINE_MIDDLE_BASE_CLASS,
                            open ? LINE_MIDDLE_OPEN_CLASS : LINE_MIDDLE_CLOSED_CLASS,
                        ].join(" ")}
                    />
                    <span
                        className={[
                            LINE_BASE_CLASS,
                            LINE_BOTTOM_CLOSED_CLASS,
                            open ? LINE_BOTTOM_OPEN_CLASS : "",
                        ].join(" ")}
                    />
                </div>
            </div>

            {/* Dropdown List */}
            <div
                className={[
                    DROPDOWN_BASE_CLASS,
                    open ? DROPDOWN_OPEN_CLASS : DROPDOWN_CLOSED_CLASS,
                ].join(" ")}
            >
                <ul className={LIST_CLASS}>
                    {finalLinks.map((item) => (
                        <li key={item.id}>
                            <a className={LINK_CLASS} href={item.href}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
