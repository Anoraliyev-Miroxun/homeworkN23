import { BaseController } from './base.controller.js';
import Admin from '../models/admin.model.js';
import crypto from '../utils/Crypto.js';

class AdminController extends BaseController {
    constructor() {
        super(Admin)
    };

    async createAdmin(req, res) {
        try {
            const { username, password, email } = req.body;
            const exsistUsername = await Admin.findOne({ username })
            if (exsistUsername) {
                return res.status(409).json({
                    statusCode: 409,
                    message: "not found"
                })
            };
            console.log('nima gap')
            const exsistEmail = await Admin.findOne({ email })
            if (exsistEmail) {
                return res.status(409).json({
                    statusCode: 409,
                    message: "not found"
                })
            };
            const hashedPassword = await crypto.encrypt(password)
            const admin = await Admin.create({
                email,
                hashedPassword,
                username
            });

            return res.status(200).json({
                statusCode: 200,
                message: "success",
                data: admin
            })
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message:"catchda hato chiqdi"
            });
        }
    }

    async singIn(req, res) {
        try {
            console.log("salllllom")
            const { password, username } = req.body
            console.log(req.body)
            console.log("hellllllll")
            const admin = await Admin.findOne({ username });
            console.log(admin)
            const ismatchPassword = await crypto.decrypt(password, admin?.hashedPassword ??'');
            if (!ismatchPassword) {
                return res.status(400).json({
                    statusCode: 400,
                    message: "password yoki username hato qayta uring"
                })
            };
            return res.status(200).json({
                statusCode: 200,
                message: 'success',
                data: admin
            })

        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error
            })
        }
    }
}

export default new AdminController();
