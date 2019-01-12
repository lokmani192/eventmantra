const config = require('config.json');
const nodeMailer = require('nodemailer');
const request = require('request');
const common = {
    sendEmail: async function (from, to,subject,body) {

        let transporter = nodeMailer.createTransport(config.mailConfig);
        let mailOptions = {
            from: from,
            to: to,
            subject: subject,
            text: body,
            html: body
        };

        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
            res.render('index');
        });
   
    },
    sendMessage: async function (msg, phonenos) {
        var status = {};
        status.success = false;
        status.message = [];
        if (msg.trim().length < 5) {
            status.message.push("message length is too short");
        }
        if (phonenos.length < 10) {
            status.message.push("mobile number can not be less than 10 numbers");
        }
        if (msg.trim().length > 5 && phonenos.length >= 10) {
            var msgConfig = config.msgConfig;
            var phoneArray = phonenos.split(',');
            var msgNumbers = "";
            phoneArray.forEach(e => { msgNumbers = msgNumbers + '<ADDRESS TO="' + e + '"></ADDRESS>' });
            var xmlMessage = '<MESSAGE><AUTHKEY>' + msgConfig.authkey + '</AUTHKEY>' +
                '<SENDER>' + msgConfig.sender + '</SENDER>' +
                '<ROUTE>' + msgConfig.route + '</ROUTE>' +
                '<CAMPAIGN>' + msgConfig.compaignname + '</CAMPAIGN>' +
                '<COUNTRY>' + msgConfig.countrycode + '</COUNTRY>' +
                '<SMS TEXT="' + msg + '">' + msgNumbers +
                '</SMS >' +
                '</MESSAGE >';
            var options = {
                method: 'POST',
                url: msgConfig.msgAPIURL,
                headers: { 'content-type': 'application/xml' },
                body: xmlMessage
            };

            return await new Promise((resolve, reject)=>{
                request(options, (error, response, body) => {
                    if (response && response.statusCode == 200) {
                        status.success = true;
                        status.message.push(msg);
                        resolve(status);
                    }
                    if (error) {
                        status.message.push(error);
                        resolve(status);
                    }
                    

                });
            });
        }
        else {
            return status;
        }
    }

};

module.exports = common;