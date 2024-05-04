import styles from "./Services.module.css";

import birthdayIcon from "../public/images/birthday-icon.png";
import meetingIcon from "../public/images/meeting-icon.png";
import weddingIcon from "../public/images/wedding-icon.png";
import ServiceItem from "./ServiceItem";

const serviceData = [
  {
    icon: birthdayIcon,
    title: "Birthday Party",
    context:
      "Even the all-powerful Pointing has no control about the blindtexts it is an almost unorthographic.",
  },
  {
    icon: meetingIcon,
    title: "Business Meeting",
    context:
      "Even the all-powerful Pointing has no control about the blindtexts it is an almost unorthographic.",
  },
  {
    icon: weddingIcon,
    title: "Wedding Party",
    context:
      "Even the all-powerful Pointing has no control about the blindtexts it is an almost unorthographic.",
  },
];

function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.servicesTitle}>
        <h2 className="font-alexBrush">Services</h2>
        <h3>Catering Services</h3>
      </div>
      <div className={styles.servicesContainer}>
        {serviceData.map((service, i) => (
          <ServiceItem
            icon={service.icon}
            title={service.title}
            context={service.context}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
