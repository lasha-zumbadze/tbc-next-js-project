"use client";

import { uploadImage } from "@/app/actions/uploadImage";

export function FormForImg() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await uploadImage(formData);
    event.target.reset();
  };

  return (
    <form action={uploadImage} onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <input type="file" name="image" required className="text-xl" />

        <button className="bg-[#c8a97e] text-white py-2 px-4 rounded-md hover:bg-[#a9845f] transition duration-300 self-start text-xl">
          Upload Image
        </button>
      </div>
    </form>
  );
}
