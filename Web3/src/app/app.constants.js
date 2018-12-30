"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var social_link_1 = require("./_classes/social-link");
var environment_1 = require("../environments/environment");
var AppConstants = /** @class */ (function () {
    function AppConstants() {
    }
    AppConstants.WebsiteUrl = environment_1.environment.websiteUrl;
    AppConstants.WebsiteName = 'Letsplanevent.com';
    AppConstants.ImageBaseUrl = environment_1.environment.imageBaseUrl;
    AppConstants.ContactPhoneNo = '783 868 0532';
    AppConstants.ContactEmail = 'contact@letsplanevent.com';
    AppConstants.CompanyName = 'EventMantra Services Pvt Ltd';
    AppConstants.SocialLinks = [new social_link_1.SocialLink('facebook', 'https://www.facebook.com/letsplanevent', 'Facebook', 'facebook.png', 16), new social_link_1.SocialLink('twitter', 'https://twitter.com/letsplanevent', 'Twitter', 'twitter.png', 28), new social_link_1.SocialLink('pinrest', 'https://www.pinterest.com/letsplanevent/', 'Pinterest', 'pinterest.png', 21), new social_link_1.SocialLink('instagram', 'https://twitter.com/letsplanevent', 'Instagram', 'instagram.png', 25)];
    AppConstants.AboutLinks = [new social_link_1.SocialLink('block', 'http://www.letsplanevent.com/about', 'About Us '), new social_link_1.SocialLink('block', '#', 'In The Press '), new social_link_1.SocialLink('block', 'http://www.letsplanevent.com/privacy-policy', 'Privacy Policy '), new social_link_1.SocialLink('block', '#', 'Terms & Conditions '),
        new social_link_1.SocialLink('block', '#', 'FAQs ')];
    return AppConstants;
}());
exports.AppConstants = AppConstants;
//# sourceMappingURL=app.constants.js.map