import { Button } from "@/components/ui/button";
import { Sparkles, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold gradient-text">Mopify</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors">
              {t('nav.services')}
            </a>
            <a href="#why-us" className="text-foreground/80 hover:text-foreground transition-colors">
              {t('nav.whyUs')}
            </a>
            <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">
              {t('nav.testimonials')}
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Languages className="w-4 h-4 mr-2" />
                  {i18n.language === 'ru' ? 'RU' : 'UZ'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => changeLanguage('ru')}>
                  Русский
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('uz')}>
                  O'zbek
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="hero" size="sm">
              {t('nav.getQuote')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
