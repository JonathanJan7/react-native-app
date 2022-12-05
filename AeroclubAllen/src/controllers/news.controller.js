// Data Base
import { pool } from "../db.js";
import { somethingWentWrong500 } from "../error/error.handler.js";

// Where news imgs are saved
import { NEWS_IMG_ROUTE } from "../config.js";

// Auditlog
import { createLog } from "../services/auditlog/auditlog.dao.js";


// Get news
export const getNews = async (req, res) => {
	const { x0, n } = req.query;

	try {
		if(Number.isInteger(parseInt(n)) && Number.isInteger(parseInt(x0))){
			const [rows] = await pool.query(
				"SELECT * FROM news ORDER BY date DESC LIMIT ?,?",
				[parseInt(x0), parseInt(n)],
			);
			res.json(rows);
		} else {
			res.status(400).send("Some variables are not integer as expected");
		}
	} catch (e) {
		somethingWentWrong500(e, res);
	}
};

// Create news
export const createNews = async (req, res) => {
	const { date, title, description, imgName } = JSON.parse(req.body.data);

	if (date == null || title == null || description == null || imgName == null) {
		res.status(400).json({
			message: "Some data is null",
		});
	} else {
		const imgRoute = NEWS_IMG_ROUTE + "/" + imgName;

		try {
			await pool.query(
				"INSERT INTO news (date, title, description, img) VALUES (?,?,?,?);",
				[date, title, description, imgRoute],
			);

			// Gets the id of the recently added news, and creates a log of it
			const [rows] = await pool.query("SELECT id FROM news ORDER BY id DESC LIMIT 1");
			await createLog(req.user.dni, "creation", "news", rows[0].id);

			res.send("Post Success");
		} catch (e) {
			somethingWentWrong500(e, res);
		}
	}
};

// Update news
export const updateNews = async (req, res) => {
	const { id } = req.params;
	const { date, title, description, imgName } = JSON.parse(req.body.data);

	// If imgName is undefined (no img sent), then it gives a null imgRoute to sql
	let imgRoute = null;
	if(imgName != undefined){
		imgRoute = NEWS_IMG_ROUTE+"/"+imgName;
	}

	try {
		const [dbRes] = await pool.query(
			"UPDATE news SET date = IFNULL(?, date), title = IFNULL(?, title), description = IFNULL(?, description), img = IFNULL(?, img) WHERE id = ?",
			[date, title, description, imgRoute, id],
		);

		if (dbRes.affectedRows === 0) {
			return res.status(404).json({
				message: "New not found",
			});
		} else {
			await createLog(req.user.dni, "modification", "news", id);
			res.json((await pool.query("SELECT * FROM news WHERE id = ?", [id]))[0]);
		}
	} catch (e) {
		somethingWentWrong500(e, res);
	}
};

// Delete news
export const deleteNews = async (req, res) => {
	const { id } = req.params;

	try {
		const [dbRes] = await pool.query("DELETE FROM news WHERE id=?", [id]);

		if (dbRes.affectedRows === 0) {
			return res.status(404).json({
				message: "New not found",
			});
		} else {
			await createLog(req.user.dni, "deletion", "news", id);
			res.send("News Deleted");
		}
	} catch (e) {
		somethingWentWrong500(e, res);
	}
};