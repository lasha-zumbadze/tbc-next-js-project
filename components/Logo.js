function Logo({ titleFont, subtitleFont, letterSpace, color }) {
  return (
    <div className="mr-20 leading-tight cursor-pointer -tracking-[2px]">
      <p className="text-[3rem]" style={{ fontSize: `${titleFont}rem` }}>
        The Venue
      </p>
      <p
        className="text-[1.2rem] tracking-[0.5rem] pl-2 font-normal"
        style={{
          fontSize: `${subtitleFont}rem`,
          letterSpacing: `${letterSpace}rem`,
        }}
      >
        RESTAURANT
      </p>
    </div>
  );
}

export default Logo;
