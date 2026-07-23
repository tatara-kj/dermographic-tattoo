import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0B0C0F",
        color: "#F1EBDD",
        border: "3px solid #8E342E",
        fontSize: 25,
        fontWeight: 700,
        letterSpacing: "-2px",
      }}
    >
      DT
    </div>,
    size,
  );
}
