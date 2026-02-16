const WRAPPER_CLASS = "w-full md:w-[170px] overflow-hidden text-white ";
const IMAGE_WRAPPER_CLASS = "flex justify-center overflow-hidden";
const IMAGE_CLASS = "h-[90px] w-[115px] object-cover";
const CONTENT_CLASS = "p-5";
const HEADER_CLASS = "flex flex-col items-center gap-3";
const SEPARATOR_CLASS = "h-px w-full bg-[#BCBEC0]";
const TITLE_CLASS = "text-center text-sm font-semibold";
const LIST_CLASS = "mt-5 space-y-3 grid place-items-center";
const LINK_CLASS = "block font-thin text-[#BCBEC0] transition hover:text-white";

export default function FooterItem({ data }) {
    const { image, title, links = [] } = data ?? {};
    const imgAlt = image?.alt || title || "Footer item";

    return (
        <div className={WRAPPER_CLASS}>
            {/*Footer list Icon*/}
            <div className={IMAGE_WRAPPER_CLASS}>
                <img
                    src={image?.src}
                    alt={imgAlt}
                    className={IMAGE_CLASS}
                    loading="lazy"
                />
            </div>

            {/*Footer list Title*/}
            <div className={CONTENT_CLASS}>
                <div className={HEADER_CLASS}>
                    <span className={SEPARATOR_CLASS} />
                    <p className={TITLE_CLASS}>{title}</p>
                    <span className={SEPARATOR_CLASS} />
                </div>

                {/*Footer list Items*/}
                <ul className={LIST_CLASS}>
                    {links.map((link) => (
                        <li key={link.id}>
                            <a href={link.href} className={LINK_CLASS}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
