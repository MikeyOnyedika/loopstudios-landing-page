const CompanyPitch = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-pitch gap-5 lg:max-w-max  ">
            <div className="bg-interactive-mobile w-full aspect-[16/11] bg-no-repeat bg-cover" />
            <div className="flex gap-3 flex-col justify-end  lg:-translate-x-1/4 ">
                <div className="flex gap-3 flex-col text-center bg-white p-5 lg:pt-16 lg:pb-0 lg:pr-0 lg:pl-20 lg:text-start ">
                    <h2 className="text-black uppercase font-sans-lg text-md lg:text-xl">
                        The leader in interactive VR
                    </h2>
                    <p className="font-sans-sm text-body-copy  text-gray">
                        Founded in 2011, Loopstudios has been producing world-class virtual reality
                        projects for some of the best companies around the globe. Our award-winning
                        creations have transformed businesses through digital experiences that bind
                        to their brand.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CompanyPitch
