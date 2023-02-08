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
  return (
    <section className="py-11  flex flex-col gap-5 p-5">
      <div className="flex justify-center lg:justify-between">
        <h2 className="justify-self-center  text-gray-dark uppercase font-sans-lg text-lg text-center">
          Our creations
        </h2>
        <SeeAllBtn hiddenOnMobile={true} />
      </div>

      <div className="text-white  text-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-5  font-sans-lg uppercase">
        <div className="bg-deep-earth-mobile lg:bg-deep-earth-desktop     aspect-[16/6] bg-no-repeat bg-cover flex  items-center justify-start text-sans-lg px-1 leading-none">
          <div className="flex flex-col mx-[5%] mt-[10%]">
            <h4>deep</h4>
            <h4>earth</h4>
          </div>
        </div>
        <div className="bg-night-arcade-mobile lg:bg-night-arcade-desktop  lg:w-1/4 lg:aspect-auto aspect-[16/6] bg-no-repeat bg-cover
         flex  items-center justify-start text-sans-lg px-1 leading-none">
          <div className="flex flex-col mx-[5%] mt-[10%]">
            <h4>night</h4>
            <h4>arcade</h4>
          </div>
        </div>
        <div className="bg-soccer-team-mobile lg:bg-soccer-team-desktop  lg:w-1/4 aspect-[16/6] bg-no-repeat bg-cover
         flex  items-center justify-start text-sans-lg px-1 leading-none">
          <div className="flex flex-col mx-[5%] mt-[10%]">
            <h4>soccer</h4>
            <h4>team vr</h4>
          </div>
        </div>
        <div className="bg-grid-mobile lg:bg-grid-desktop  lg:w-1/4 aspect-[16/6] bg-no-repeat bg-cover
         flex  items-center justify-start text-sans-lg px-1 leading-none">
          <div className="flex flex-col mx-[5%] mt-[10%]">
            <h4>the</h4>
            <h4>grid</h4>
          </div>
        </div>
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

