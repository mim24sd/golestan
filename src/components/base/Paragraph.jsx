import Button from "./Button.jsx";

const SECTION_CLASS = "grid w-full justify-center bg-white pb-8";
const CONTAINER_CLASS = "grid lg:w-[700px] gap-5 px-8 lg:px-0";
const TITLE_CLASS = "pt-8text-md  md:text-xl font-bold text-[#ED1C24]";
const TEXT_CLASS = "pb-4 text-base leading-9 text-[#818588] text-justify";
const ACTIONS_WRAPPER_CLASS = "flex flex-wrap justify-start gap-4 pt-5 pb-12";

export default function Paragraph({ title, texts = [], actions = [] }) {
    const hasTexts = Array.isArray(texts) && texts.length > 0;
    const hasActions = Array.isArray(actions) && actions.length > 0;

    return (
        <section className={SECTION_CLASS}>
            <div className={CONTAINER_CLASS}>
                {title ? <h2 className={TITLE_CLASS}>{title}</h2> : null}

                {hasTexts
                    ? texts.map((text, idx) => (
                        <p key={idx} className={TEXT_CLASS}>
                            {text}
                        </p>
                    ))
                    : null}

                {hasActions ? (
                    <div className={ACTIONS_WRAPPER_CLASS}>
                        {actions.map((action, idx) => {
                            const isString = typeof action === "string";
                            const buttonText = isString ? action : action?.label;
                            const key = isString ? `${action}-${idx}` : action?.id ?? idx;

                            return <Button key={key} text={buttonText} />;
                        })}
                    </div>
                ) : null}
            </div>
        </section>
    );
}
