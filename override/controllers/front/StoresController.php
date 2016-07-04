<?php
class StoresController extends StoresControllerCore
{
    public function setMedia()
    {
        if (!Module::isEnabled('mpgooglemapsfix')) {
            return parent::setMedia();
        }
        FrontController::setMedia();
        $this->addCSS(_THEME_CSS_DIR_.'stores.css');

        if (!Configuration::get('PS_STORES_SIMPLIFIED')) {
            $default_country = new Country((int)Tools::getCountry());
            $googleMapsJs = 'http'.((Configuration::get('PS_SSL_ENABLED') && Configuration::get('PS_SSL_ENABLED_EVERYWHERE')) ? 's' : '').'://maps.google.com/maps/api/js?sensor=true&region='.substr($default_country->iso_code, 0, 2);
            if (Configuration::get('MPGOOGLEMAPSFIX_API_KEY')) {
                $googleMapsJs .= '&'.rawurlencode(Configuration::get('MPGOOGLEMAPSFIX_API_KEY'));
            }
            $this->addJS($googleMapsJs);
            $this->addJS(_THEME_JS_DIR_.'stores.js');
        }
    }
}
