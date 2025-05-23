import { _generateMetadata, getTranslate } from "app/_utils";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import { IconSprites } from "@calcom/ui/components/icon";
import type { IconName } from "@calcom/ui/components/icon";

import { lucideIconList } from "../../../../packages/ui/components/icon/icon-list.mjs";
import { IconGrid } from "./IconGrid";

const interFont = Inter({ subsets: ["latin"], variable: "--font-inter", preload: true, display: "swap" });
const calFont = localFont({
  src: "../../fonts/CalSans-SemiBold.woff2",
  variable: "--font-cal",
  preload: true,
  display: "swap",
  weight: "600",
});
export const generateMetadata = async () => {
  return await _generateMetadata(
    (t) => t("icon_showcase"),
    () => "",
    undefined,
    undefined,
    "/icons"
  );
};
export default async function IconsPage() {
  const icons = Array.from(lucideIconList).sort() as IconName[];
  const t = await getTranslate();

  return (
    <div className={`${interFont.variable} ${calFont.variable}`}>
      <div className="bg-subtle flex h-screen">
        <IconSprites />
        <div className="bg-default m-auto min-w-full rounded-md p-10 text-right ltr:text-left">
          <h1 className="text-emphasis font-cal text-2xl font-medium">{t("icons_showcase")}</h1>
          <IconGrid title="Regular Icons" icons={icons} />
          <IconGrid
            title="Filled Icons"
            icons={icons}
            rootClassName="bg-inverted text-inverted"
            iconClassName="fill-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
