import styles from "./Logo.module.css";

function Logo({ titleFont, subtitleFont, letterSpace, color }) {
  return (
    <div className={styles.logo}>
      <p style={{ fontSize: `${titleFont}rem` }}>The Venue</p>
      <p
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
