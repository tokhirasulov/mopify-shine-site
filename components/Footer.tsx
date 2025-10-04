"use client";

import { Sparkles, Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

import MopifyIcon from "../public/assets/icons/mopify-icon.svg";

const Footer = () => {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <MopifyIcon className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold gradient-text">Mopify</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              {t("description")}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+998 90 123 45 67</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@mopify.uz</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{t("location")}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">{t("services")}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="#services"
                  className="hover:text-foreground transition-colors"
                >
                  {t("residential")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-foreground transition-colors"
                >
                  {t("commercial")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-foreground transition-colors"
                >
                  {t("deepCleaning")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-foreground transition-colors"
                >
                  {t("specialized")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">{t("company")}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  {t("about")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  {t("careers")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  {t("contact")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  {t("blog")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>{t("copyright", { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
