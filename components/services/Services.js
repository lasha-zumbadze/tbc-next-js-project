import birthdayIcon from "../../public/images/birthday-icon.png";
import meetingIcon from "../../public/images/meeting-icon.png";
import weddingIcon from "../../public/images/wedding-icon.png";
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
    <section className="py-40 flex flex-col items-center gap-40 bg-[#6c757d0d] mt-24">
      <div>
        <h2 className="font-alexBrush text-[#c8a97e] text-[11rem] leading-[0] text-center font-normal">
          Services
        </h2>
        <h3 className="text-8xl text-center font-semibold">
          Catering Services
        </h3>
      </div>
      <div className="grid grid-cols-3 px-80 my-0 mx-auto items-center ">
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
