import { Markup, Telegraf, session } from 'telegraf';
import { envConfig } from './configs/index.js';
import { User } from './models/user.model.js';
import { sequelize } from './servers/server.js';
import userService from './services/user.service.js';
import { langkeybord } from './keybords/index.js';
import { messageEN, messageRU, messageUz } from './messages/index.js';
import { HasOne } from 'sequelize';

const message = {
    uz: messageUz,
    ru: messageRU,
    en: messageEN
}


const token = envConfig.bot.token;

if (!token) {
    throw new Error("Telegram token not found")
}


const bot = new Telegraf(token);

bot.use(session({
    defaultSession: () => ({ step: null, user: {} })
}));


async function start() {
    try {
        bot.start(async (cxt) => {
            const cilent = cxt.from;

            const user = await userService.getById(cilent.id);
            if (!user) {
                await userService.create(cilent);
            }
            return cxt.reply(
                "Asalomu aleykum botmizga xush kelipsz 🎉.\n\nIltimos bol tilini tanlang",
                langkeybord
            )
        })


        bot.action(["lang_uz", "lang_en", "lang_ru"], async (cxt) => {
            cxt.answerCbQuery();

            const userInfo = cxt.update.callback_query.from;
            const lan = cxt.update.callback_query.data.split("_")[1];
            await userService.update(userInfo.id, { language_code: lan })

            cxt.reply(
                message[lan].name,
                Markup.keyboard([
                    [userInfo.first_name]
                ])
                    .oneTime()
                    .resize()
            )


        });


        bot.on("text", async (cxt) => {
            const userInfo = cxt.from;
            const text = cxt.text;


            if (!cxt.session.step) {
                cxt.session.step = "add_name";
                cxt.session.user = { first_name: text };
                const telegram_id = cxt.from.id;
                const user = await userService.getById(telegram_id);
                const lang = user.dataValues.language_code;
                cxt.reply(message[lang].tel_nomer,
                    Markup.keyboard([
                        [Markup.button.contactRequest(message[lang].phone_number_send)]
                    ])
                        .oneTime()
                        .resize()
                )
                return;
            }




        });

        bot.on("contact", async (cxt) => {
            await userService.update(cxt.message.contact.user_id, { phone_number: cxt.message.contact.phone_number });
            const telegram_id = cxt.from.id;
            const user = await userService.getById(telegram_id);
            const lang = user.dataValues.language_code;
            cxt.reply(
                message[lang].royhat_otdi
            )
        })


    } catch (error) {
        console.log("error chiqdi bot.js catchga tushdi", error);
        process.exit(1);
    }
}








(async () => {
    try {
        await sequelize.authenticate();
        console.log("malumotlar bazasiga muafaqiyatli ulandi");

        await sequelize.sync({ alter: true });
        console.log("databaza bilan sinxronlashdi");


        await start()
    } catch (error) {
        console.log("Error chiqdi bot.js da catchga tushdi IIF funksiyada", error);
        process.exit(1);
    }
})();

bot.launch();