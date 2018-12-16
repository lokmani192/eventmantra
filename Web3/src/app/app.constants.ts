import { SocialLink } from './_classes/social-link';
import { environment } from '../environments/environment';
export class AppConstants{
  public static WebsiteName='Letsplanevent.com';
  public static ImageBaseUrl = environment.imageBaseUrl;
  public static ContactPhoneNo = '783 868 0532';
  public static ContactEmail = 'contact@letsplanevent.com';
  public static CompanyName = 'EventMantra Services Pvt Ltd';
  public static SocialLinks = [new SocialLink('facebook', 'https://www.facebook.com/letsplanevent', 'Facebook', 'facebook.png',16), new SocialLink('twitter', 'https://twitter.com/letsplanevent', 'Twitter', 'twitter.png',28), new SocialLink('pinrest', 'https://www.pinterest.com/letsplanevent/', 'Pinterest', 'pinterest.png',21), new SocialLink('instagram', 'https://twitter.com/letsplanevent', 'Instagram', 'instagram.png',25)];
  public static AboutLinks = [new SocialLink('block', 'http://www.letsplanevent.com/about', 'About Us '), new SocialLink('block', '#', 'In The Press '), new SocialLink('block', 'http://www.letsplanevent.com/privacy-policy', 'Privacy Policy '), new SocialLink('block', '#', 'Terms & Conditions '),
  new SocialLink('block', '#', 'FAQs ')];
  
}
