/**
 * @description Renders children over a full-bleed TMDB background image with a dark overlay.
 * @param children - Content displayed on top of the background.
 * @param image - TMDB image path appended to the base URL.
 * @returns A wrapper element with a background image and semi-transparent dark overlay.
 */
export default function WrapperBg({
  children,
  image,
}: {
  children: React.ReactNode;
  image: string | null;
}) {
  return (
    <div className="relative">
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${image}')`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11,11,13,0.9) 0%, rgba(11,11,13,1) 60%",
          }}
        />
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}
