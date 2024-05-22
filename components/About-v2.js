function About() {
  let accumulator = 1;

  return (
    <section className="h-screen relative">
      <div
        className={`bg-interier1 w-full h-full bg-cover absolute translate-x-[${
          accumulator * 100
        }%]`}
      >
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d4d4d4a1] w-3/5 p-28 text-4xl font-semibold text-justify leading-snug">
          At VENUE, we pride ourselves on using the finest ingredients to create
          dishes that are both innovative and rooted in tradition. Our menu is a
          vibrant fusion of italian flavors, featuring everything from beloved
          classics to contemporary creations. Each dish is crafted with care,
          ensuring that every bite is a delightful journey for your taste buds.
        </p>
      </div>
      <div className="bg-interier1 w-full h-full bg-cover absolute">
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d4d4d4a1] w-3/5 p-28 text-4xl font-semibold text-justify leading-snug">
          Our team is the heart and soul of VENUE. From our talented chefs to
          our friendly waitstaff, every member is dedicated to making your visit
          special. We believe in creating a family-like atmosphere where
          everyone, both staff and guests, feels valued and appreciated.
        </p>
      </div>
      <div className="bg-interier1 w-full h-full bg-cover absolute">
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d4d4d4a1] w-3/5 p-28 text-4xl font-semibold text-justify leading-snug">
          We are committed to sustainability and supporting local producers. Our
          ingredients are sourced from nearby farms and markets, ensuring that
          we serve fresh, high-quality dishes while supporting our community.
          Additionally, we strive to minimize our environmental footprint
          through eco-friendly practices.
        </p>
      </div>
      <div className="bg-interier1 w-full h-full bg-cover absolute">
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d4d4d4a1] w-3/5 p-28 text-4xl font-semibold text-justify leading-snug">
          Whether you are celebrating a special occasion, enjoying a night out
          with friends, or simply indulging in a delicious meal, we invite you
          to join us at VENUE. Our cozy ambiance, exceptional service, and
          delectable cuisine make us the perfect destination for any occasion.
          Come and experience the magic of VENUE – where every meal is a
          celebration.
        </p>
      </div>
    </section>
  );
}

export default About;
