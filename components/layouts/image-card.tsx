import { theme } from "@/theme";
import { ReactNode } from "react";

type ImageCardProps = {
  image: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function ImageCard({ image, title, description }: ImageCardProps) {
  return (
    <div
      style={{
        background: theme.components.card.bg,
        border: theme.components.card.border,
        borderRadius: theme.components.card.radius,
        overflow: "hidden",
      }}
      className="flex flex-col grow h-full"
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: theme.components.card.padding }} className="h-36">
        <h3 style={{ margin: 0 }}>{title}</h3>
        {description && (
          <p style={{ color: theme.colors.text.secondary }}>{description}</p>
        )}
      </div>
    </div>
  );
}
