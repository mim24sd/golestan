import Paragraph from "../base/Paragraph.jsx";

import customersImage from "../../assets/images/home/customers.png";
import productsImage from "../../assets/images/home/products.png";
import humanCapitalsImage from "../../assets/images/home/human-capitals.png";
import salesCentersImage from "../../assets/images/home/sales-centers.png";

const ABOUT_SECTIONS = [
    {
        title: "معرفی گلستان",
        texts: [
            "آنچه که امروز با نام مجموعه گلستان می‌شناسیم در سال 1329 بنیان نهاده شد. زمانی که شرکت گلستان فعالیت خود را با بسته‌بندی و توزیع چای پاکتی آغاز کرد. با گذر زمان و رشد اقتصاد کشور، نهال «گلستان» به تدریج تقویت شد و شاخ و برگ گرفت. فعالیت‌های «گلستان» با تهیه، تولید و بسته‌بندی بهترین محصولات غذایی گسترش پیدا کرد. گلستان پس از سال‌ها تلاش همچنان می‌کوشد تا به کمک تجربه‌های اندوخته شده در این سال‌ها کالاهایی قابل اعتماد و با کیفیت تولید نماید.",
            "هدفمندی و برنامه‌ریزی موثر، ایمان و عزم راسخ برای دستیابی به اهداف تعیین شده، به کار گیری همکاران مجرب و دلسوز، استفاده از روش های نوین بازاریابی و مشتری محوری از جمله عوامل مهم در استراتژی شرکت گلستان است",
        ],
    },
    {
        title: "محصولات گلستان",
        texts: [
            "نام تجاری گلستان قدمتی به اندازه عمر شرکت گلستان دارد. گلستان ممتازترین محصولات خود را با این نام تجاری عرضه می‌کند. مصرف‌کنندگان محصولات گلستان همواره از این نام تجاری خاطره محصولاتی ممتاز و منحصر بفرد دارند و با اطمینان از نهایت کیفیت این نام تجاری حمایت می‌کنند.",
        ],
    },
];

const SERVICE_CARDS = [
    { title: "سرمایه انسانی", imageSrc: humanCapitalsImage },
    { title: "مراكز فروش", imageSrc: salesCentersImage },
    { title: "محصولات گلستان", imageSrc: productsImage },
    { title: "مشتریان گلستان", imageSrc: customersImage },
];

const DIVIDER_WRAPPER_CLASS = "py-5 px-3";
const DIVIDER_LINE_CLASS = "h-[2px] w-full bg-[#DFE1E3]";
const SECTION_WRAPPER_CLASS = "w-full pt-4 animate-about-slide-in-rtl";
const CARDS_WRAPPER_CLASS = "px-4 flex justify-center gap-5 pt-14 pb-28 animate-about-reveal-center animation-timeline:view() animation-range:entry_0%_entry_35% animation-fill-mode:both will-change-transform";
const CARD_CLASS = "grid gap-5 border-b border-[#DFE1E3] py-5 text-center ";
const CARD_TITLE_CLASS = "font-thin";

function Divider() {
    return (
        <div className={DIVIDER_WRAPPER_CLASS}>
            <div className={DIVIDER_LINE_CLASS} />
        </div>
    );
}

export default function AboutUs() {
    return (
        <div>
            <Divider />

            {/* AboutUs Section */}
            {ABOUT_SECTIONS.map((section) => (
                <div key={section.title} className={SECTION_WRAPPER_CLASS}>
                    <Paragraph
                        title={section.title}
                        texts={section.texts}
                        actions={section.actions ?? null}
                    />
                </div>
            ))}

            {/* AboutUs Cards */}
            <div className={CARDS_WRAPPER_CLASS}>
                {SERVICE_CARDS.map((card) => (
                    <div key={card.title} className={CARD_CLASS}>
                        <img src={card.imageSrc} alt={card.title} />
                        <p className={CARD_TITLE_CLASS}>{card.title}</p>
                    </div>
                ))}
            </div>

            <Divider />
        </div>
    );
}
