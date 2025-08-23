import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="flex items-center min-h-screen px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full space-y-6 text-center">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            {t("not_found_title")}
          </h1>
          <p className="text-gray-500">{t("not_found_description")}</p>
        </div>

        <Button asChild>
          <Link to="/">{t("not_found_button")}</Link>
        </Button>
      </div>
    </div>
  );
}
