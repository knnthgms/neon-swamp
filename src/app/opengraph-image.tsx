import { ImageResponse } from "next/og";
import OgCard, { OG_SIZE } from "@/components/OgCard";
import { SITE_DESCRIPTION } from "@/lib/site";

export const dynamic = "force-static";
export const alt = "Ken Gomes — Senior Software Engineer";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <OgCard eyebrow="Senior Software Engineer" title="Hi, I'm Ken Gomes." subtitle={SITE_DESCRIPTION} />,
    size
  );
}
