"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var social_link_1 = require("./_classes/social-link");
var environment_1 = require("../environments/environment");
var AppConstants = /** @class */ (function () {
    function AppConstants() {
    }
    AppConstants.WebsiteName = 'Letsplanevent.com';
    AppConstants.ImageBaseUrl = environment_1.environment.imageBaseUrl;
    AppConstants.ContactPhoneNo = '783 868 0532';
    AppConstants.ContactEmail = 'contact@letsplanevent.com';
    AppConstants.CompanyName = 'EventMantra Services Pvt Ltd';
    AppConstants.SocialLinks = [new social_link_1.SocialLink('facebook', 'https://www.facebook.com/letsplanevent', 'Facebook'), new social_link_1.SocialLink('twitter', 'https://twitter.com/letsplanevent', 'Twitter'), new social_link_1.SocialLink('pinrest', 'https://www.pinterest.com/letsplanevent/', 'Pinterest')];
    AppConstants.AboutLinks = [new social_link_1.SocialLink('block', 'http://www.letsplanevent.com/about', 'About Us '), new social_link_1.SocialLink('block', '#', 'In The Press '), new social_link_1.SocialLink('block', 'http://www.letsplanevent.com/privacy-policy', 'Privacy Policy '), new social_link_1.SocialLink('block', '#', 'Terms & Conditions '),
        new social_link_1.SocialLink('block', '#', 'Safe Payments '), new social_link_1.SocialLink('block', '#', 'Payment Policies '), new social_link_1.SocialLink('block', '#', 'FAQs ')];
    return AppConstants;
}());
exports.AppConstants = AppConstants;
//# sourceMappingURL=app.constants.js.map