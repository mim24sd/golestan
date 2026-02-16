import Button from "./Button.jsx";

const WRAPPER_BASE_CLASS = "w-[319px] overflow-hidden bg-white text-justify shadow-lg";
const MEDIA_WRAPPER_CLASS = "relative w-full aspect-video bg-gray-100";
const VIDEO_CLASS = "h-full w-full object-cover";
const IFRAME_CLASS = "h-full w-full";
const IMAGE_CLASS = "h-[289px] w-[319px] object-cover";
const CONTENT_CLASS = "flex h-[260px] flex-col p-5";
const TITLE_CLASS = "pb-3 text-lg font-semibold text-[#FF0000]";
const DESCRIPTION_CLASS = "text-sm leading-7 text-[#7C7D7E]";
const BUTTON_WRAPPER_CLASS = "mt-auto pt-6";

const isDirectVideoFile = (url = "") =>
    /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);

const isEmbeddableUrl = (url = "") =>
    /^https?:\/\/.+/i.test(url) && !isDirectVideoFile(url);

export default function Card({
                                 type = "image",
                                 src,
                                 poster,
                                 title,
                                 description,
                                 buttonText = "اطلاعات بیشتر",
                                 onButtonClick,
                                 className = "",
                             }) {
    const wrapperClassName = [WRAPPER_BASE_CLASS, className].filter(Boolean).join(" ");
    const altText = title || "card media";

    return (
        <div className={wrapperClassName}>
            {/* Card Media */}
            <div className={MEDIA_WRAPPER_CLASS}>
                {type === "video" ? (
                    isEmbeddableUrl(src) ? (
                        <iframe
                            className={IFRAME_CLASS}
                            src={src}
                            title={title || "video"}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        <video className={VIDEO_CLASS} controls poster={poster}>
                            <source src={src} type="video/mp4" />
                            مرورگر شما از ویدئو پشتیبانی نمی‌کند.
                        </video>
                    )
                ) : (
                    <img src={src} alt={altText} className={IMAGE_CLASS} loading="lazy" />
                )}
            </div>

            {/* Card Content */}
            <div className={CONTENT_CLASS}>
                {title ? <h3 className={TITLE_CLASS}>{title}</h3> : null}
                {description ? <p className={DESCRIPTION_CLASS}>{description}</p> : null}

                {/* Card Button */}
                <div className={BUTTON_WRAPPER_CLASS}>
                    <Button text={buttonText} onClick={onButtonClick} />
                </div>
            </div>
        </div>
    );
}
