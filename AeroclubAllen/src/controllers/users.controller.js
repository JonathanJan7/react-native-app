// Data Base
import { pool } from "../db.js";

import { somethingWentWrong500 } from "../error/error.handler.js";

// Get Users
export const getUsers = async (req, res) => {
	if(req.user.role == "admin"){
		try {
			const [ rows ] = await pool.query(
				"SELECT dni, name, surname, role FROM users"
			);
			res.json(rows);
		} catch (e) {
			somethingWentWrong500(e, res);
		}
	} else {
		res.status(400).json({
			message: "User is not an admin"
		})
	}
	
}

// Create User
export const createUser = async (req, res) => {
	const { dni, role } = req.body;
	if(req.user.role == "admin"){
    if (dni == "" || role == "") {
		res.status(400).json({
			message: "Some data is wrong",
		});
	} else {
		try {
			await pool.query(
				"INSERT INTO users (dni, role, password) VALUES (?,?,?)",
				[dni, role, 'newuser'],
			);
			res.send("Post Success");
		} catch (e) {
			if ((e.code = "ER_DUP_ENTRY")) {
                return res.status(500).json({
                    message: "Error, duplicated DNI",
                });
            } else {
                somethingWentWrong500(e, res);
            }
		}
	}} else {
		res.status(400).json({
			message: "User is not an admin"
		})
	}
};

// Update User
export const updateUser = async (req, res) => {
	const { dni } = req.params;
	const { name, surname, role } = req.body;
	if(req.user.role == "admin"){

	try {
		const [dbRes] = await pool.query(
			"UPDATE users SET name = IFNULL(?, name), surname = IFNULL(?, surname), role = IFNULL(?, role) WHERE dni = ?",
			[name, surname, role, dni],
		);

		if (dbRes.affectedRows === 0) {
			return res.status(404).json({
				message: "User not found",
			});
		} else {
			res.json((await pool.query("SELECT * FROM users WHERE dni = ?", [dni]))[0]);
		}
	} catch (e) {
		somethingWentWrong500(e, res);
	}} else {
		res.status(400).json({
			message: "User is not an admin"
		})
	}
};

// Delete User
export const deleteUser = async (req, res) => {
	const { dni } = req.params;

	if(req.user.role == "admin" && req.user.dni != dni){
		try {
			const [ dbRes ] = await pool.query("DELETE FROM users WHERE dni=?", [ dni ]);
	
			if (dbRes.affectedRows === 0) {
				return res.status(404).json({
					message: "User not found",
				});
			} else {
				res.send("User Deleted");
			}
		} catch (e) {
			somethingWentWrong500(e, res);
		}
	} else {
		res.status(400).json({
			message: "User is not an admin"
		})
	}
}