'use client';

import { Button } from "@/components/ui/button";
import { Sparkles, Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MopifyIcon from "../public/assets/icons/mopify-icon.svg"

const Navigation = () => {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <MopifyIcon className="w-6 h-6 text-primary" data-testid="icon-logo" />
            <span className="text-xl font-bold gradient-text" data-testid="text-brand">Mopify</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors" data-testid="link-services">
              {t('services')}
            </a>
            <a href="#why-us" className="text-foreground/80 hover:text-foreground transition-colors" data-testid="link-why-us">
              {t('whyUs')}
            </a>
            <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors" data-testid="link-testimonials">
              {t('testimonials')}
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" data-testid="button-language">
                  <Languages className="w-4 h-4 mr-2" />
                  {locale === 'ru' ? 'RU' : 'UZ'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => changeLanguage('ru')} data-testid="language-ru">
                  Русский
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('uz')} data-testid="language-uz">
                  O'zbek
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="hero" size="sm" data-testid="button-get-quote">
              {t('getQuote')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
