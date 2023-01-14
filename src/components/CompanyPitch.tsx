const CompanyPitch = () => {
    return (
        <section className="grid-cols-1 lg:grid-cols-2">
            <div className="bg-interactive-mobile w-full aspect-[16/11] bg-no-repeat bg-cover" />
            <div className="flex gap-3 flex-col text-center px-5 py-12">
                <h2 className="text-gray-dark uppercase font-sans-lg text-lg">
                    The leader in interactive VR
                </h2>
                <p className="font-sans-sm text-body-copy text-gray">
                    Founded in 2011, Loopstudios has been producing world-class virtual reality
                    projects for some of the best companies around the globe. Our award-winning
                    creations have transformed businesses through digital experiences that bind
                    to their brand.
                </p>
            </div>
        </section>
    )
}

export default CompanyPitch