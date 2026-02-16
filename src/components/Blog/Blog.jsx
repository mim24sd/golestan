import Card from "../base/Card.jsx";

import recipePic1 from "../../assets/images/products/recipe-pic-1.jpg";
import recipePic2 from "../../assets/images/products/recipe-pic-2.jpg";
import recipePic3 from "../../assets/images/products/recipe-pic-3.jpg";

const VIDEO_1 = "https://www.aparat.com/video/video/embed/videohash/Ysaot/vt/frame";
const VIDEO_2 = "https://www.aparat.com/video/video/embed/videohash/cQ0yF/vt/frame";
const VIDEO_3 = "https://www.aparat.com/video/video/embed/videohash/Mwp4H/vt/frame";
const BLOG_SECTIONS = [
    {
        id: "recipes",
        wrapperClassName: "bg-[#CDE4B0]",
        cards: [
            {
                id: "macaroni-veg",
                type: "image",
                mediaSrc: recipePic1,
                title: "ماکارونی با سبزیجات",
                description: `ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌ می‌ریزیم‌ تا کمی‌ بپزد. در این‌
حین‌ پیازها را خرد کرده‌ و روی‌ روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…`,
                buttonText: "ادامه مطلب",
            },
            {
                id: "mexican-soup",
                type: "image",
                mediaSrc: recipePic2,
                title: "سوپ مکزیکی",
                description:
                    "گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن بیرون آورده…",
                buttonText: "اطلاعات بیشتر",
            },
            {
                id: "chilaquiles",
                type: "image",
                mediaSrc: recipePic3,
                title: "چیلاکیله",
                description:
                    "احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از فهرست...",
                buttonText: "اطلاعات بیشتر",
            },
        ],
    },
    {
        id: "videos",
        wrapperClassName: "bg-white",
        cards: [
            {
                id: "noodle-salad",
                type: "video",
                mediaSrc: VIDEO_1,
                title: "سالاد نودل",
                description:
                    "نودل هاتی کارا یك میان‌وعده‌ی مغذی، در هر موقعیتی كه باشید با كمی آب جوش و یك نودل هاتی‌كارا می‌توانید از یك غذای سالم و خوشمزه لذت ببرید.",
                buttonText: "ویدیوهای بیشتر",
            },
            {
                id: "hati-noodle-instagram",
                type: "video",
                mediaSrc: VIDEO_2,
                title: "اینستاگرام هاتی نودل",
                description:
                    "نودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی دانست. طعم عالی،‌ ارزش غذایی بالا و قیمت مناسب از این محصول غذای سالم و كاملی ساخته است.",
                buttonText: "ادامه مطلب",
            },
            {
                id: "golestan-rice",
                type: "video",
                mediaSrc: VIDEO_3,
                title: "برنج گلستان",
                description:
                    "عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر از همیشه است. چرا كه مشتریان گلستان؛‌ لایق بهترین ها هستند.",
                buttonText: "مشاهده محصولات",
            },
        ],
    },
];

const CONTAINER_CLASS = "lg:w-[980px] mx-auto";
const SECTION_TITLE_CLASS = "text-[#ED1C24] py-10 font-bold text-lg";
const CARDS_CLASS =
    "py-20 grid [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))] place-items-center gap-8 sm:gap-2 w-full sm:w-[650px] lg:w-[980px]";

export default function Blog() {
    const handleCardButtonClick = (cardId) => {
        console.log("Card clicked:", cardId);
    };

    return (
        <section className="bg-white">
            {/*Blog Title*/}
            <div className={`${CONTAINER_CLASS} flex justify-start pr-8`}>
                <p className={SECTION_TITLE_CLASS}>مجله گلستان</p>
            </div>

            {/*Blog Cards*/}
            {BLOG_SECTIONS.map((section) => (
                <div
                    key={section.id}
                    className={`${section.wrapperClassName} flex justify-center`}
                >
                    <div className={CARDS_CLASS}>
                        {section.cards.map((card) => (
                            <Card
                                key={card.id}
                                type={card.type}
                                src={card.mediaSrc}
                                title={card.title}
                                description={card.description}
                                buttonText={card.buttonText}
                                onButtonClick={() => handleCardButtonClick(card.id)}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}
