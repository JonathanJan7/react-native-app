import { pool } from "../../db.js";

const news = {};

//GET NEWS
news.getNews = async (x0, n) => {
	try {
		const [rows] = await pool.query("SELECT * FROM news ORDER BY date DESC LIMIT ?,?", [parseInt(x0), parseInt(n)]);
		return rows;
	} catch (error) {
		throw error;
	}
};

//CREATE NEWS
news.createNews = async (date, title, description, imgName) => {
	try {
		console.log('creando...');
		const [rows] = await pool.query("INSERT INTO news (date, title, description, img) VALUES (?,?,?,?);", [
			date,
			title,
			description,
			imgName,
		]);
		
		return rows;
	} catch (error) {
		console.log(error);
		
		throw error;
		
	}
};

//GET LAST ID
news.getLastId = async () =>{
    try {
        //const [rows] = await pool.query("SELECT id FROM news ORDER BY id DESC LIMIT 1");
		const [rows] = await pool.query("SELECT * FROM news ORDER BY id DESC LIMIT 1");
        return rows;
    } catch (error) {
		console.log(error);
		
        throw error;
    }
}

//UPDATE NEWS
news.updateNews = async (date, title, description, imgRoute, id) => {
	try {
		[rows] = await pool.query(
			"UPDATE news SET date = IFNULL(?, date), title = IFNULL(?, title), description = IFNULL(?, description), img = IFNULL(?, img) WHERE id = ?",
			[date, title, description, imgRoute, id],
		);
		return rows;
	} catch (error) {
		throw error;
	}
};

//GET NEWS ID
news.getNewsId = async (id) =>{
    try {
        [rows] = await pool.query("SELECT * FROM news WHERE id = ?", [id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

//DELETE NEWS
news.deleteNews = async (id)=> {
    try {
        const [rows] = await pool.query("DELETE FROM news WHERE id=?", [id]);		
		return rows;
    } catch (error) {
        throw error;
    }
}

news.getNewsImg = async (id) => {
	try {		
		const [rows] = await pool.query("SELECT img FROM news WHERE id = ?", [id]);
		return rows[0].img;
	} catch (error) {
		throw error;
	}
};

export default news;
