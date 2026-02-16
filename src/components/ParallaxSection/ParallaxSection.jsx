import parallaxImg from "../../assets/images/home/background.png";

const SECTION_CLASS = "h-[250px] w-full bg-center bg-cover bg-no-repeat md:bg-fixed";
const SPACER_CLASS = "h-[250px] w-full";
const PARALLAX_STYLE = {
    backgroundImage: `url(${parallaxImg})`,
    backgroundSize: "100%",
};

export default function ParallaxSection() {
    return (
        <section className={SECTION_CLASS} style={PARALLAX_STYLE}>
            <div className={SPACER_CLASS} />
        </section>
    );
}
