
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
    <section className="py-11 flex flex-col gap-5">
      <h2 className="text-gray-dark uppercase font-sans-lg text-lg text-center">
        Our creations
      </h2>

      <div className="text-white text-md grid grid-cols-1 gap-5 p-5 font-sans-lg uppercase">
        {creations.map(item => (
          <div key={item.id} className={`bg-${item.mobile} lg:bg-${item.desktop} w-full aspect-[16/6] bg-no-repeat bg-cover
         flex  items-center justify-start text-sans-lg px-1 leading-none`}>
            <div className="flex flex-col mx-[5%] mt-[10%]">
              <h4  >    {item.text1}  </h4>
              <h4 >    {item.text2}  </h4>
            </div>
          </div>
        )
        )}
      </div>

      <button className="uppercase font-sans-sm tracking-[0.3em] border-2 self-center py-2 px-10 border-gray-dark" 
      >See all</button>

    </section>
  )
}

export default Creations
