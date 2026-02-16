import FooterItem from "./FooterItem.jsx";
import SocialIcons from "./SocialIcons.jsx";

import teaIcon from "../../assets/images/productIcons/tea.png";
import teabagIcon from "../../assets/images/productIcons/teabag.png";
import legumesIcon from "../../assets/images/productIcons/legumes.png";
import spicesIcon from "../../assets/images/productIcons/spices.png";

const FOOTER_CONTENT = {
    copyright: "All Right Reserved Golestan Company 2022-2025",
    designBy: "Design By: Shamim",
    columns: [
        {
            id: "tea",
            image: { src: teaIcon, alt: "Tea" },
            title: "چای گلستان",
            links: [
                { id: "tea-1", label: "چای ممتاز هندوستان", href: "#" },
                { id: "tea-2", label: "چای ممتاز ارل گری", href: "#" },
                { id: "tea-3", label: "چای سيلان عطری", href: "#" },
                { id: "tea-4", label: "چای ممتاز سيلان", href: "#" },
                { id: "tea-5", label: "چای صبحانه گلستان", href: "#" },
            ],
        },
        {
            id: "teabag",
            image: { src: teabagIcon, alt: "Teabag" },
            title: "تی‌بگ گلستان",
            links: [
                { id: "teabag-1", label: "تی بگ بلک لاين", href: "#" },
                { id: "teabag-2", label: "تی بگ ارل گری", href: "#" },
                { id: "teabag-3", label: "دمنوش نعناع", href: "#" },
                { id: "teabag-4", label: "دمنوش بابونه", href: "#" },
                { id: "teabag-5", label: "دمنوش چای سبز", href: "#" },
            ],
        },
        {
            id: "spices",
            image: { src: spicesIcon, alt: "Spices" },
            title: "ادویه گلستان",
            links: [
                { id: "spices-1", label: "زعفران ممتاز خراسان", href: "#" },
                { id: "spices-2", label: "ادویه کاری", href: "#" },
                { id: "spices-3", label: "ادویه ماست و خیار", href: "#" },
                { id: "spices-4", label: "فلفل سياه خالص", href: "#" },
                { id: "spices-5", label: "زردچوبه ممتاز", href: "#" },
            ],
        },
        {
            id: "legumes",
            image: { src: legumesIcon, alt: "Legumes" },
            title: "حبوبات گلستان",
            links: [
                { id: "legumes-1", label: "لوبيا قرمز ممتاز", href: "#" },
                { id: "legumes-2", label: "لوبيا چيتی گلستان", href: "#" },
                { id: "legumes-3", label: "عدس كانادايی", href: "#" },
                { id: "legumes-4", label: "نخود زودپز كرمانشاه", href: "#" },
                { id: "legumes-5", label: "لوبيا سفيد گلستان", href: "#" },
            ],
        },
    ],
};

const SOCIAL_BAR_CLASS = "grid place-items-center bg-[#EEEFEF] py-5";
const RED_STRIP_CLASS = "h-[20px] w-full bg-[#ED1C24]";
const FOOTER_BODY_CLASS = "bg-[#1f1f1f] grid md:place-items-center  p-3 md:p-6";
const COLUMNS_GRID_CLASS = "grid grid-cols-1 gap-6 p-3 md:grid-cols-4";
const RULES_CLASS = "grid py-10 text-center";
const COPYRIGHT_CLASS = "text-[#9F9F9F] text-base";
const DESIGN_BY_CLASS = "text-[#7B7B7B] text-sm";

export default function Footer() {
    return (
        <footer>
            {/*Footer Social Icons*/}
            <div className={SOCIAL_BAR_CLASS}>
                <SocialIcons />
            </div>
            {/*Footer Red Line*/}
            <div className={RED_STRIP_CLASS} />

            {/*Footer Lists*/}
            <div className={FOOTER_BODY_CLASS}>
                <div className={COLUMNS_GRID_CLASS}>
                    {FOOTER_CONTENT.columns.map((column) => (
                        <FooterItem key={column.id} data={column} />
                    ))}
                </div>

                {/*Footer Rules*/}
                <div className={RULES_CLASS}>
                    <p className={COPYRIGHT_CLASS}>{FOOTER_CONTENT.copyright}</p>
                    <p className={DESIGN_BY_CLASS}>{FOOTER_CONTENT.designBy}</p>
                </div>
            </div>
        </footer>
    );
}
