import Image from "next/image";
import AddToCartBtn from "./AddToCartBtn";
import Decor from "../Decor";

function DishDetails({ dish }) {
  return (
    <div className="pt-40 px-4">
      <div className="flex flex-col md:flex-row justify-center mb-16 py-8 items-center gap-8 md:gap-16">
        <Decor />
        <div className="flex items-center flex-col">
          <h1 className="font-alexBrush text-7xl md:text-[5rem] text-[#a68250]">
            KoKeshI
          </h1>
          <h2 className="text-7xl md:text-[5rem] -mt-8 italic text-white text-center">
            {dish.title}
          </h2>
        </div>
        <Decor />
      </div>
      <div className="grid md:grid-cols-2 md:py-16 md:pb-40 gap-x-8 gap-y-8 shadow-2xl w-full md:w-4/5 mx-auto mb-36 md:mb-0">
        <div className="w-full aspect-[6/4] shadow-xl relative">
          <div className="absolute border-[1px] border-textGolden w-full h-full top-4 left-4"></div>
          <Image
            layout="fill"
            objectFit="cover"
            src={dish.imgurl}
            alt={dish.title}
          />
        </div>
        <div className="flex flex-col px-4 md:px-16 mt-8 gap-8 md:gap-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            <h2 className="text-6xl font-bold text-textGolden">{dish.title}</h2>
            <p className="text-5xl font-normal text-white">{dish.price} ₾</p>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            {dish.ingredients.map((ingredient, i) => (
              <div className="underline text-textGolden text-2xl" key={i}>
                {ingredient}
              </div>
            ))}
          </div>
          <div className="border-solid w-full text-justify mt-4 md:mt-10">
            <p className="text-3xl text-gray-300 leading-[1.3]">
              {dish.description}
            </p>
          </div>
          <div className="text-4xl text-gray-300 mt-auto">
            <span className="text-textGolden text-4xl mr-2">Category: </span>
            {dish.category}
          </div>

          <AddToCartBtn color={true} id={dish.id} detailsPage={true} />
        </div>
      </div>
      <h2 className="text-textGolden text-4xl text-center mb-4">
        ABOUT OUR MEALS
      </h2>
      <div className="border-t-textGolden border-t-2 w-full md:w-4/5 mx-auto text-gray-200 text-[1.6rem] p-4 md:p-8 md:pb-24 pb-24">
        <p>
          Welcome to <em>KoKeshI</em>, where we invite you to embark on a
          culinary journey through the exquisite world of sushi. Our menu
          features an array of meticulously crafted sushi creations, each a
          testament to the artistry and precision of our skilled chefs.
        </p>
        <br />
        <h3 className="text-textGolden">Sushi: A Symphony of Flavors</h3>
        <p>
          Sushi is more than just a meal; it&apos;s an experience. At{" "}
          <em>KoKeshI</em>, we take pride in offering sushi that tantalizes the
          taste buds and pleases the senses. From the first bite, you&apos;ll be
          immersed in a symphony of flavors, textures, and aromas.
        </p>
        <br />
        <h3 className="text-textGolden">
          Fresh Ingredients, Exceptional Quality
        </h3>
        <p>
          We believe that exceptional sushi begins with the finest ingredients.
          Our chefs select only the freshest fish, the highest-quality nori, and
          premium sushi rice. Each piece of sushi is crafted with care, ensuring
          that every bite is a perfect balance of taste and texture.
        </p>
        <br />
        <h3 className="text-textGolden">
          Signature Rolls and Classic Favorites
        </h3>
        <p>
          Our menu boasts an impressive selection of both signature rolls and
          classic favorites. Whether you&apos;re a sushi aficionado or a
          first-time explorer, you&apos;ll find something to love. From the
          vibrant and flavorful California Roll to the delicate and savory
          Nigiri, our offerings cater to every palate.
        </p>
        <br />
        <h3 className="text-textGolden">An Artful Presentation</h3>
        <p>
          At <em>KoKeshI</em>, we understand that presentation is as important
          as taste. Each sushi roll is an artful creation, beautifully arranged
          and garnished to delight the eyes as well as the palate. Our chefs
          take great care in the visual appeal of our dishes, making your dining
          experience as aesthetically pleasing as it is delicious.
        </p>
        <br />
        <h3 className="text-textGolden">Experience the Tradition</h3>
        <p>
          Sushi is deeply rooted in tradition, and we honor that heritage by
          preserving the techniques and flavors that have been passed down
          through generations. Our chefs are trained in the traditional methods
          of sushi preparation, ensuring an authentic experience with every
          dish.
        </p>
        <br />
        <h3 className="text-textGolden">Join Us for an Unforgettable Meal</h3>
        <p>
          Whether you&apos;re enjoying a casual lunch, a romantic dinner, or a
          special celebration, <em>KoKeshI</em> offers the perfect setting for
          any occasion. Our inviting atmosphere, attentive service, and
          exceptional sushi make every meal unforgettable. Come and savor the
          flavors of sushi at <em>KoKeshI</em>. We look forward to serving you
          an extraordinary dining experience that will leave you coming back for
          more.
        </p>
      </div>
    </div>
  );
}

export default DishDetails;
