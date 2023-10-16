import Image from "next/image";
import defaultTheme from "tailwindcss/defaultTheme";

const maxWidth = parseInt(defaultTheme.screens["lg"]!);

const dimensionsWithMaxWidth = (width: number, height: number) => {
  const ratio = width / height;
  const maxWidthHeight = maxWidth / ratio;

  return {
    width: maxWidth,
    height: Math.floor(maxWidthHeight),
  };
};

const MDXImage = ({
  src,
  alt,
  width,
  height,
}: JSX.IntrinsicElements["img"]) => {
  const parsedWidth =
    typeof width === "string" ? parseInt(width) : width ?? 1920;
  const parsedHeight =
    typeof height === "string" ? parseInt(height) : height ?? 1080;

  const dimensions = dimensionsWithMaxWidth(parsedWidth, parsedHeight);

  return (
    <Image
      src={src!}
      alt={alt ?? "Content Image"}
      title={alt ?? "Content Image"}
      width={dimensions.width}
      height={dimensions.height}
    />
  );
};

export default MDXImage;
