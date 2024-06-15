// import { list } from "@vercel/blob";
// import Image from "next/image";

// export async function Images() {
//   async function allImages() {
//     const blobs = await list();
//     return blobs;
//   }
//   const imagesData = await allImages();
//   const images = imagesData.blobs.sort((a, b) => a.uploadedAt - b.uploadedAt);

//   return (
//     <section>
//       {images.map((image) => (
//         <Image
//           priority
//           key={image.pathname}
//           src={image.url}
//           alt="Image"
//           width={200}
//           height={200}
//         />
//       ))}
//     </section>
//   );
// }
