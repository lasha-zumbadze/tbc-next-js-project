import styles from "./Reservation.module.css";

function Reservation() {
  return (
    <section className={styles.reservationTable}>
      <div className={styles.reservationTitle}>
        <h2 className="font-alexBrush">5 Stars</h2>
        <h3>Make a Reservation</h3>
      </div>
      <div className={styles.reservationOptions}>
        <input type="date" />
        <select>
          <option>Time</option>
          <option>10:00 AM</option>
          <option>11:00 AM</option>
          <option>12:00 PM</option>
          <option>01:00 PM</option>
          <option>02:00 PM</option>
          <option>03:00 PM</option>
          <option>04:00 PM</option>
          <option>05:00 PM</option>
          <option>06:00 PM</option>
          <option>07:00 PM</option>
          <option>08:00 PM</option>
          <option>09:00 PM</option>
          <option>10:00 PM</option>
        </select>
        <select>
          <option>Person</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4+</option>
        </select>
      </div>
      <button>Make a Reservation</button>
    </section>
  );
}

export default Reservation;
