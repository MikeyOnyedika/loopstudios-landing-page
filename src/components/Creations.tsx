import { SeeAllBtn } from "./SeeAllBtn"

const Creations = () => {
  const gridItem = `aspect-[16/6] lg:aspect-[9/16] lg:justify-between bg-no-repeat bg-cover lg:bg-contain flex  items-end justify-start text-sans-lg px-1 leading-none h-max cursor-pointer hover:bg-blend-screen hover:text-black transition-colors bg-gray`

  const gridTextWrapper = `flex p-5 lg:p-9`

  return (
    <section className="flex flex-col gap-16  w-full items-center max-w-max">
      <div className="flex justify-center md:justify-between w-full">
        <h2 className="text-black uppercase font-sans-lg text-md lg:text-xl">
          Our creations
        </h2>
        <SeeAllBtn hiddenOnMobile={true} />
      </div>

      <div className="text-white text-sm lg:text-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 font-sans-lg uppercase w-full justify-between">
        <div className={`bg-deep-earth-mobile lg:bg-deep-earth-desktop ${gridItem} `}>
          <div className={`${gridTextWrapper}`}>
            <h4>deep <br /> earth</h4>
          </div>
        </div>
        <div className={`bg-night-arcade-mobile lg:bg-night-arcade-desktop ${gridItem}`}>
          <div className={`${gridTextWrapper}`}>
            <h4>night <br /> arcade</h4>
          </div>
        </div>
        <div className={`bg-soccer-team-mobile lg:bg-soccer-team-desktop ${gridItem}`}>
          <div className={`${gridTextWrapper}`}>
            <h4>soccer <br /> team vr</h4>
          </div>
        </div>
        <div className={`bg-grid-mobile lg:bg-grid-desktop ${gridItem}`}>
          <div className={`${gridTextWrapper}`}>
            <h4>the <br /> grid</h4>
          </div>
        </div>
        <div className={`bg-from-above-mobile lg:bg-from-above-desktop ${gridItem}`}>
          <div className={`${gridTextWrapper}`}>
            <h4>from up<br /> above vr</h4>
          </div>
        </div>
        <div className={`bg-pocket-borealis-mobile lg:bg-pocket-borealis-desktop ${gridItem}`} >
          <div className={`${gridTextWrapper}`}>
            <h4>pocket <br /> borealis</h4>
          </div>
        </div>
        <div className={`bg-curiosity-mobile lg:bg-curiosity-desktop ${gridItem}`}>
          <div className={`${gridTextWrapper}`}>
            <h4>the <br /> curiosity</h4>
          </div>
        </div>
        <div className={`bg-fisheye-mobile lg:bg-fisheye-desktop ${gridItem}`}>
          <div className={`${gridTextWrapper}`}>
            <h4>make it <br /> fisheye</h4>
          </div>
        </div>
      </div>

      <SeeAllBtn hiddenOnMobile={false} />
    </section>
  )
}

export default Creations

