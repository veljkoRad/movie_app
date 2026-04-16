/**
 * @description Renders children over a full-bleed TMDB background image with a dark overlay.
 * @param children - Content displayed on top of the background.
 * @param image - TMDB image path appended to the base URL.
 * @returns A wrapper element with a background image and semi-transparent dark overlay.
 */
export default function WrapperBg({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div
        className="bg-contain bg-top"
        style={{
          backgroundImage: `url('/cinema-bg.jpg')`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--overlay-soft) 0%, var(--overlay-strong) 40%)",
          }}
        />
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}
