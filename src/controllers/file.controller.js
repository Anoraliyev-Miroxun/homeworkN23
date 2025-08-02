import { asyncHandler } from "../lib/index.js";
import { File } from '../models/file.model.js';

class FileController {
	fileUpload = asyncHandler(async (req, res, next) => {
		const data = [];
		
		if (req.file) {
			const file = req.file;
			const save = await File.create({
				store_name: file.filename,
				original_name: file.originalname,
				mime_type: file.mimetype,
				path: file.path,
				size: file.size
			})
			
			data.push(save)
		}
		if (req.files) {
			if (Array.isArray(req.files)) {
				const files = req.files;
				for (const file of files) {
					const save = await File.create({
						store_name: file.filename,
						original_name: file.originalname,
						mime_type: file.mimetype,
						path: file.path,
						size: file.size
					})
					data.push(save)
					
				}

			}

		}

		if (typeof req.files === "object") {
			const files = Object.values(req.files).flat();
			for (const file of files) {
				const save = await File.create({
					store_name: file.filename,
					original_name: file.originalname,
					mime_type: file.mimetype,
					path: file.path,
					size: file.size
				})
				data.push(save)
				
			}
		}

		return res.status(201).json({
			statusCode:201,
			message:"success",
			data:data
		})


	});
}

export const fileController = new FileController();
