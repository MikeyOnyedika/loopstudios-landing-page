import { SeeAllBtn } from "./SeeAllBtn"

const Creations = () => {
  const creations = [
    {
      id: 1,
      mobile: "deep-earth-mobile",
      desktop: "deep-earth-desktop",
      text1: "deep",
      text2: 'earth'
    },
    {
      id: 2,
      mobile: "night-arcade-mobile",
      desktop: "night-arcade-desktop",
      text1: "night",
      text2: 'arcade'
    },
    {
      id: 3,
      mobile: "soccer-team-mobile",
      desktop: "soccer-team-desktop",
      text1: "soccer",
      text2: 'team vr'

    },
    {
      id: 4,
      mobile: "grid-mobile",
      desktop: "grid-desktop",
      text1: "the",
      text2: "grid"

    },
    {
      id: 5,
      mobile: "from-above-mobile",
      desktop: "from-above-desktop",
      text1: "from up",
      text2: "above vr"
    }, {
      id: 6,
      mobile: "pocket-borealis-mobile",
      desktop: "pocket-borealis-desktop",
      text1: "pocket",
      text2: "borealis"
    }, {
      id: 7,
      mobile: "curiosity-mobile",
      desktop: "curiosity-desktop",
      text1: "the",
      text2: "curiosity"
    }, {
      id: 8,
      mobile: "fisheye-mobile",
      desktop: "fisheye-desktop",
      text1: "make it",
      text2: "fisheye"

    }
  ]

  const gridItem = `aspect-[16/6] lg:aspect-[9/16] lg:justify-between bg-no-repeat bg-cover lg:bg-contain flex  items-end justify-start text-sans-lg px-1 leading-none h-max`

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
        {
          creations.map(item => (
            <div className={`bg-${item.mobile} lg:bg-${item.desktop} ${gridItem} `} key={item.id}>
              <div className={`${gridTextWrapper}`}>
                <h4>{item.text1} <br /> {item.text2}</h4>
              </div>
            </div>
          ))
        }
        {/* <div className={`bg-deep-earth-mobile lg:bg-deep-earth-desktop ${gridItem} `}>
          <div className={`${gridTextWrapper}`}>
            <h4>deep <br /> earth</h4>
          </div>
        </div> */}
        {/* <div className={`bg-night-arcade-mobile lg:bg-night-arcade-desktop ${gridItem}`}>
          <div className={`${gridTextWrapper}`}>
            <h4>night <br /> arcade</h4>
          </div>
        </div> */}
        {/* <div className={`bg-soccer-team-mobile lg:bg-soccer-team-desktop ${gridItem}`}>
          <div className={`${gridTextWrapper}`}>
            <h4>soccer <br /> team vr</h4>
          </div>
        </div> */}
        {/* <div className={`bg-grid-mobile lg:bg-grid-desktop ${gridItem}`}>
          <div className={`${gridTextWrapper}`}>
            <h4>the <br /> grid</h4>
          </div>
        </div> */}
        {/* <div className="bg-from-above-mobile lg:bg-from-above-desktop  lg:w-1/4 aspect-[16/6] bg-no-repeat bg-cover
         flex  items-center justify-start text-sans-lg px-1 leading-none">
          <div className="flex flex-col mx-[5%] mt-[10%]">
            <h4>from up</h4>
            <h4>above vr</h4>
          </div>
        </div> */}
      </div>

      <SeeAllBtn hiddenOnMobile={false} />
    </section>
  )
}

export default Creations

