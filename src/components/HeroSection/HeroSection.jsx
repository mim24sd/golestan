import Button from "../base/Button.jsx";
import teaHeroImage from "../../assets/images/products/tea-pic-1.png";

const HERO_DATA = {
    title: "قرعه‌کشی مصرف‌کنندگان گلستان",
    subtitle: "قرعه‌کشی دوره‌ای مصرف‌کنندگان چای گلستان",
    description: "هر یک از مصرف‌کنندگان محصولات چایای و چای کیسه‌ای گلستان می‌توانند با ارسال کد قرعه‌کشی روی بسته به شماره 30007405 در قرعه کشی‌های دوره‌ای گلستان شرکت کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی است.",
    ctaText: "اطلاعات بیشتر",
    imageSrc: teaHeroImage,
    imageAlt: "Hero image",
};

const SECTION_CLASS = "w-full bg-transparent bg-[linear-gradient(190deg,#FBFBFB_0%,#D2D2D2_100%)] pt-40 md:pt-60 lg:pt-24";
const CONTAINER_CLASS = "mx-auto max-w-5xl px-12 lg:px-4 py-10";
const GRID_CLASS = "grid items-center gap-10 md:gap-20 md:grid-cols-2 px-0 sm:px-12";
const TEXT_COL_CLASS = "grid gap-5 rtl:text-right ltr:text-left";
const TITLE_CLASS = "mt-2 text-3xl font-light leading-tight text-[#FF0000]";
const SUBTITLE_CLASS = "text-xl font-light text-[#2b2b2b] opacity-80";
const DESCRIPTION_CLASS = "mt-4 max-w-md text-base font-light leading-8 text-[#898989] opacity-90 animate-hero-drop-text";
const CTA_WRAPPER_CLASS = "mt-6";
const IMAGE_COL_CLASS = "flex justify-center overflow-hidden";
const IMAGE_CLASS = "md:h-[400px] md:w-[350px] animate-hero-drop-image";

export default function HeroSplit() {
    const { title, subtitle, description, ctaText, imageSrc, imageAlt } = HERO_DATA;

    const handleCtaClick = () => {
        console.log("Hero CTA clicked");
    };

    return (
        <section className={SECTION_CLASS}>
            <div className={CONTAINER_CLASS}>
                <div className={GRID_CLASS}>
                    {/* Hero Section Text */}
                    <div className={TEXT_COL_CLASS}>
                        <h1 className={TITLE_CLASS}>{title}</h1>
                        <p className={SUBTITLE_CLASS}>{subtitle}</p>

                        <p className={DESCRIPTION_CLASS}>{description}</p>

                        <div className={CTA_WRAPPER_CLASS}>
                            <Button text={ctaText} onClick={handleCtaClick} />
                        </div>
                    </div>

                    {/* Hero Section Image */}
                    <div className={IMAGE_COL_CLASS}>
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className={IMAGE_CLASS}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
