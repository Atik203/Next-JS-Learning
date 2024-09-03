import Image from "next/image";

const GalleryPage = () => {
  return (
    <div className="text-center mt-10 font-bold">
      <h1>This is image gallery component</h1>
      <h2>Normal img tag</h2>
      <img
        src="https://nextjs.org/api/docs-og?title=components:Image"
        alt="normal"
        height={500}
        width={500}
        className="mx-auto"
      />

      <h2>Image component</h2>
      <Image
        src="https://nextjs.org/api/docs-og?title=components:Image"
        alt="next"
        width={500}
        height={500}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
