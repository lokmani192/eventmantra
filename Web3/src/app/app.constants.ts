import { SocialLink } from './_classes/social-link';
import { environment } from '../environments/environment';
export class AppConstants{
  public static WebsiteName='Letsplanevent.com';
  public static ImageBaseUrl = environment.imageBaseUrl;
  public static ContactPhoneNo = '783 868 0532';
  public static ContactEmail = 'contact@letsplanevent.com';
  public static CompanyName = 'EventMantra Services Pvt Ltd';
  public static SocialLinks = [new SocialLink('facebook', 'https://www.facebook.com/letsplanevent', 'Facebook'), new SocialLink('twitter', 'https://twitter.com/letsplanevent', 'Twitter'), new SocialLink('pinrest', 'https://www.pinterest.com/letsplanevent/', 'Pinterest')];
  public static AboutLinks = [new SocialLink('block', 'http://www.letsplanevent.com/about', 'About Us '), new SocialLink('block', '#', 'In The Press '), new SocialLink('block', 'http://www.letsplanevent.com/privacy-policy', 'Privacy Policy '), new SocialLink('block', '#', 'Terms & Conditions '),
    new SocialLink('block', '#', 'Safe Payments '), new SocialLink('block', '#', 'Payment Policies '), new SocialLink('block', '#', 'FAQs ')];
  
}
