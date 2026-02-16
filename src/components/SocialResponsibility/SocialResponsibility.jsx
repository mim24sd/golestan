import Paragraph from "../base/Paragraph.jsx";
import mehdiHospitalImage from "../../assets/images/mehdiHospital.jpg";

const SOCIAL_DATA = {
    header: {
        faTitle: "مسئوليت‌های اجتماعی شركت گلستان",
        enTitle1: "Social Responsibility",
        enTitle2: "Golestan",
        subTitle: "Mahdi Hospital",
    },
    paragraph: {
        title: "مسئولیت‌های اجتماعی گلستان",
        texts: [
            "كسب‌وكارها اجزای قدرتمند جامعه به شمار می‌آیند و موفق‌ترین، قابل‌احترام‌ترین و مطلوب‌ترین كسب‌وكارها آنهایی هستند كه كاری فراتر از درآمدزایی ایجاد كنند؛‌ آنهایی كه آمده‌اند تا از تجربه و امکاناتشان برای حل مشكلات جامعه و محیط زندگی خود استفاده كنند. گلستان در فعالیت‌های‌ اجتماعی خود،‌ گسترده وسیعی از فعالیت‌های عام‌المنفعه را در دستوركار خود قرار داده است.",
        ],
        actions: [{ id: "more", label: "اطلاعات بیشتر" }],
    },
    image: {
        src: mehdiHospitalImage,
        alt: "Mahdi Hospital",
        className: "block h-auto w-[320px] md:w-[320px] lg:w-[395px] max-w-none",
    },
};

const WRAPPER_CLASS = "relative overflow-x-hidden overflow-y-hidden";
const HERO_CLASS = "flex h-[650px] w-full items-center justify-center bg-[#105153]";
const HERO_INNER_CLASS = "mx-auto text-center";
const FA_TITLE_CLASS = "text-lg text-[#D5ECE1]";
const LINE_WRAPPER_CLASS = "relative py-3";
const LINE_CLASS = "absolute left-1/2 top-1/2 h-px w-screen bg-[#07787C] -translate-x-1/2";
const EN_TITLES_ROW_CLASS = "flex items-baseline justify-center gap-1";
const EN_TITLE_1_CLASS = "text-xl text-[#00d8df]";
const EN_TITLE_2_CLASS = "text-3xl text-[#07787C]";
const SUBTITLE_CLASS = "pt-3 text-[#BCBEC0]";
const GOLD_STRIP_CLASS = "h-[20px] w-full bg-[#E9D69F]";
const DIVIDER_WRAPPER_CLASS = "py-5 px-3";
const DIVIDER_LINE_CLASS = "h-[2px] w-full bg-[#DFE1E3]";
const FLOAT_IMAGE_WRAPPER_CLASS = "absolute flex justify-center top-[460px] md:top-[400] left-1/2 md:top-[570px] z-10 -translate-x-1/2 md:-translate-y-1/2";
const PARAGRAPH_WRAPPER_CLASS = "pt-16";

export default function SocialResponsibility() {
    const { header, paragraph, image } = SOCIAL_DATA;

    return (
        <section>
            <div className={WRAPPER_CLASS}>

                {/*SR Top Text*/}
                <div className={HERO_CLASS}>
                    <div className={HERO_INNER_CLASS}>
                        <p className={FA_TITLE_CLASS}>{header.faTitle}</p>

                        <div className={LINE_WRAPPER_CLASS}>
                            <div className={LINE_CLASS} />
                        </div>

                        <div className={EN_TITLES_ROW_CLASS}>
                            <p className={EN_TITLE_1_CLASS}>{header.enTitle1}</p>
                            <p className={EN_TITLE_2_CLASS}>{header.enTitle2}</p>
                        </div>

                        <p className={SUBTITLE_CLASS}>{header.subTitle}</p>
                    </div>
                </div>

                {/*SR Gold Line*/}
                <div className={GOLD_STRIP_CLASS} />

                {/*SR Line*/}
                <div className={DIVIDER_WRAPPER_CLASS}>
                    <div className={DIVIDER_LINE_CLASS} />
                </div>

                {/*SR Image*/}
                <div className={FLOAT_IMAGE_WRAPPER_CLASS}>
                    <img src={image.src} alt={image.alt} className={image.className} loading="lazy" />
                </div>
            </div>

            {/*SR Bottom Text*/}
            <div className={PARAGRAPH_WRAPPER_CLASS}>
                <Paragraph title={paragraph.title} texts={paragraph.texts} actions={paragraph.actions} />
            </div>
        </section>
    );
}
