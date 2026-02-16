import riceImage from "../../assets/images/home/rice.jpg";
import pistachioImage from "../../assets/images/home/pistachio.jpg";
import teaImage from "../../assets/images/home/tea.jpg";

import Paragraph from "../base/Paragraph.jsx";

const PRODUCT_SECTIONS = [
    {
        id: "rice",
        imageSrc: riceImage,
        imageAlt: "برنج گلستان",
        badgeTitle: "برنج گلستان",
        badgeSubtitle: "معرفی محصول",
        title: "رکن اول غذای ایرانی",
        texts: [
            "مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی،‌ طارم و هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت شده، پس از كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه بسته‌بندی و در وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر از همیشه است چرا كه مشتریان گلستان؛‌ لایق بهترین‌ها هستند.",
        ],
        actions: ["آشپزخانه گلستان", "محصولات برنج"],
    },
    {
        id: "tea",
        imageSrc: teaImage,
        imageAlt: "چای گلستان",
        badgeTitle: "چای گلستان",
        badgeSubtitle: "معرفی محصول",
        title: "سابقه‌ای به قدمت یک عمر",
        texts: [
            "برای مردمان ایران زمین نام گلستان با چای پیوند خورده است؛‌ قدیمی‌ترین محصول مجموعه گلستان،‌ با مدرن‌ترین و بهداشتی‌ترین دستگاه‌های روز دنیا تهیه و بسته‌بندی می‌شود. چیزی كه باعث شده مشتریانش یك عمر به نام گلستان اعتماد كنند، كیفیت، ‌عطر و طعم به یادماندنی آن است.",
            "چای تنها یك نوشیدنی گرم نیست.‌ یک گفتمان است؛‌ گرمابخش وجود و بهانه‌ای برای آغاز یك معاشرت دل‌چسب. بی‌دلیل نیست كه نام «محبوب‌ترین نوشیدنی دنیا» را با خود یدک می‌كشد. نوشیدنش خستگی‌ها را فراری داده،‌ حس خوب آرامش را به همراه دارد.",
        ],
        actions: ["محصولات چای"],
    },
    {
        id: "pistachio",
        imageSrc: pistachioImage,
        imageAlt: "پسته گلستان",
        badgeTitle: "پسته گلستان",
        badgeSubtitle: "معرفی محصول",
        title: "پسته‌ای که حسابش جداست",
        texts: [
            "پسته گلستان اما حسابش از دیگر پسته‌های بازار جداست. مرغوب‌ترین پسته خام از بهترین باغ‌های پسته ایران دستچین می‌شود.‌ پس از كنترل كیفیت در آزمایشگاه و اطمینان از سلامت محصول،‌ با زعفران درجه یک و نمک، بوداده و برشته شده و‌ پسته گلستان را با طعم و رنگ و عطری بی‌نظیر به ارمغان می‌آورد.",
            "خواص فوق‌العاده پسته بر كسی پوشیده نیست. پسته را منبع ویتامین و مواد معدنی می‌نامند، یك پمپ خون‌ساز قوی و تسكین دهنده قلب و اعصاب.",
        ],
        actions: ["ناتس گلستان"],
    },
];

const ROOT_CLASS = "relative";
const IMAGE_CLASS = "block h-[300px] w-full object-cover border-b-[20px] border-[#E9D69F] md:h-[500px]";
const BADGE_CLASS = "absolute bottom-0 z-10 grid w-full gap-4 bg-[#ED1C24] px-10 pt-2 pb-4 right-0 md:right-[10%] lg:right-[15%] xl:right-[30%] md:w-[290px]";
const BADGE_TITLE_CLASS = "text-3xl text-white";
const BADGE_SUBTITLE_CLASS = "text-white";
const DIVIDER_WRAPPER_CLASS = "hidden px-3 py-8 md:block";
const DIVIDER_LINE_CLASS = "h-[2px] w-full bg-[#DFE1E3]";
const TEXT_WRAPPER_CLASS = "pt-10 md:pt-0";

export default function Products() {
    return (
        <>
            {PRODUCT_SECTIONS.map((item) => (
                <div key={item.id}>
                    {/* HERO */}
                    <div className={ROOT_CLASS}>
                        {/* Product Image */}
                        <img
                            src={item.imageSrc}
                            alt={item.imageAlt}
                            className={IMAGE_CLASS}
                            loading="lazy"
                        />

                        {/* Product Badge */}
                        <div className={BADGE_CLASS}>
                            <p className={BADGE_TITLE_CLASS}>{item.badgeTitle}</p>
                            <p className={BADGE_SUBTITLE_CLASS}>{item.badgeSubtitle}</p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className={DIVIDER_WRAPPER_CLASS}>
                        <div className={DIVIDER_LINE_CLASS} />
                    </div>

                    {/* Product Text */}
                    <div className={TEXT_WRAPPER_CLASS}>
                        <Paragraph title={item.title} texts={item.texts} actions={item.actions} />
                    </div>
                </div>
            ))}
        </>
    );
}
