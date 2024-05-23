// import birthdayIcon from "../../public/images/birthday-icon.png";
// import meetingIcon from "../../public/images/meeting-icon.png";
// import weddingIcon from "../../public/images/wedding-icon.png";
// import ServiceItem from "./ServiceItem";

// const serviceData = [
//   {
//     icon: birthdayIcon,
//     title: "Birthday Party",
//     context:
//       "Celebrate your special day with a personalized menu, festive decor, and exceptional service. Let us handle the details while you enjoy a joyous birthday celebration with friends and family.",
//   },
//   {
//     icon: meetingIcon,
//     title: "Business Meeting",
//     context:
//       "Host your next business meeting in our elegant and professional setting. We offer customizable menus, state-of-the-art facilities, and attentive service to ensure a productive and seamless experience.",
//   },
//   {
//     icon: weddingIcon,
//     title: "Wedding Party",
//     context:
//       "Make your wedding day unforgettable with our stunning venue, exquisite cuisine, and dedicated staff. From intimate receptions to grand celebrations, we tailor every detail to create the wedding of your dreams.",
//   },
// ];

// function Services() {
//   return (
//     <section className="py-40 flex flex-col items-center gap-40 bg-[#6c757d0d] mt-24">
//       <div>
//         <h2 className="font-alexBrush text-[#c8a97e] text-[11rem] leading-[0] text-center font-normal">
//           Services
//         </h2>
//         <h3 className="text-8xl text-center font-semibold">
//           Catering Services
//         </h3>
//       </div>
//       <div className="grid grid-cols-3 gap-8 px-80 mx-auto items-center">
//         {serviceData.map((service, i) => (
//           <ServiceItem
//             icon={service.icon}
//             title={service.title}
//             context={service.context}
//             key={i}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Services;

import birthdayIcon from "../../public/images/birthday-icon.png";
import meetingIcon from "../../public/images/meeting-icon.png";
import weddingIcon from "../../public/images/wedding-icon.png";
import ServiceItem from "./ServiceItem";

const serviceData = [
  {
    icon: birthdayIcon,
    title: "Birthday Party",
    context:
      "Celebrate your special day with a personalized menu, festive decor, and exceptional service. Let us handle the details while you enjoy a joyous birthday celebration with friends and family.",
  },
  {
    icon: meetingIcon,
    title: "Business Meeting",
    context:
      "Host your next business meeting in our elegant and professional setting. We offer customizable menus, state-of-the-art facilities, and attentive service to ensure a productive and seamless experience.",
  },
  {
    icon: weddingIcon,
    title: "Wedding Party",
    context:
      "Make your wedding day unforgettable with our stunning venue, exquisite cuisine, and dedicated staff. From intimate receptions to grand celebrations, we tailor every detail to create the wedding of your dreams.",
  },
];

function Services() {
  return (
    <section className="py-32 px-24 sm:py-20 md:px-0 md:py-20 flex flex-col items-center gap-20 bg-[#6c757d0d] mt-16 md:mt-24">
      <div>
        <h2 className="font-alexBrush text-[#c8a97e] text-8xl md:text-9xl lg:text-[11rem] leading-[0] text-center font-normal">
          Services
        </h2>
        <h3 className="text-6xl md:text-7xl lg:text-8xl text-center font-semibold md:-mt-14 lg:-mt-20">
          Catering Services
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 lg:gap-16 px-12 md:px-20 lg:px-32 mx-auto items-center">
        {serviceData.map((service, i) => (
          <ServiceItem
            icon={service.icon}
            title={service.title}
            context={service.context}
            index={i + 1}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
