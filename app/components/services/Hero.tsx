export default function Hero({ heroProps }: {
    heroProps: {
        heading: string;
        subHeading: string;
        backgroundImage: string;
    }
}) {
    return (
        <section className="flex justify-center">
            <div className="w-full  px-4">
                <div
                    className="flex min-h-[480px] flex-col gap-6 rounded-xl bg-cover bg-center bg-no-repeat items-start justify-end px-4 pb-10 sm:px-10"
                    style={{
                        backgroundImage:
                            `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url("${heroProps.backgroundImage}")`
                    }}
                >
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <h1 className="text-secondary heading font-black">
                            {heroProps.heading}
                        </h1>
                        <p className="text-secondary normalText">
                            {heroProps.subHeading}
                        </p>
                    </div>

                    
                </div>
            </div>
        </section>
    );
}
