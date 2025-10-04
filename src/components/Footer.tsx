import { Sparkles, Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-card/50 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold gradient-text">Mopify</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              {t('footer.description')}
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
                <span>{t('footer.location')}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">{t('footer.residential')}</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">{t('footer.commercial')}</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">{t('footer.deepCleaning')}</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">{t('footer.specialized')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.about')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.careers')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.contact')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.blog')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
