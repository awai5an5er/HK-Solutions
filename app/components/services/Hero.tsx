export default function Hero({ heroProps }: {
    heroProps: {
        heading: string;
        subHeading: string;
        backgroundImage: string;
        buttonText: string;
    }
}) {
    return (
        <section className="flex justify-center py-5">
            <div className="w-full max-w-6xl px-4">
                <div
                    className="flex min-h-[480px] flex-col gap-6 rounded-xl bg-cover bg-center bg-no-repeat items-start justify-end px-4 pb-10 sm:px-10"
                    style={{
                        backgroundImage:
                            `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url("${heroProps.backgroundImage}")`
                    }}
                >
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <h1 className="text-white text-4xl font-black sm:text-5xl">
                            {heroProps.heading}
                        </h1>
                        <p className="text-white text-base sm:text-lg">
                            {heroProps.subHeading}
                        </p>
                    </div>

                    <button className="flex min-w-[84px] h-12 px-5 bg-brand-primary text-white font-bold rounded-lg hover:bg-opacity-90 transition-colors">
                        {heroProps.buttonText}
                    </button>
                </div>
            </div>
        </section>
    );
}
