import express, { Request, Response } from "express";
import DriverManager from "../services/DriverManager";


export default (app: express.Application, passport?: any) => {
	app.get("/", (request: express.Request, response: express.Response) => {
		response.send("Hello world");
	});

	app.get(
		"/lists",
		async (req:express.Request, res) => {
			try {
				let lists = await DriverManager.Instance.getAllToDoLists();
				if (lists.length > 0) {
					res.send(lists);
				} else {
					res.send("No list found!");
				}
			} catch {
				res.send("Error!");
			}
		}
	);

	app.get(
		"/list/:name",
		async (req: express.Request, res: express.Response) => {
			let nameFromRequest = req.params.name;

			try {
				let requestList = await DriverManager.Instance.getListByName(
					nameFromRequest
				);
				res.send(requestList);
			} catch {
				res.send("Error!");
			}
		}
	);

	app.post(
		"/addList",
		async (req: express.Request, res: express.Response) => {
			try {
				await DriverManager.Instance.addNewList(req.body.name);
				res.send("Success!");
			} catch {
				res.send("Error!");
			}
		}
	);
	app.delete('/list/:name', async (req: express.Request, res: express.Response) => {
		let nameFromRequest = req.params.name;
		try {
			await DriverManager.Instance.deleteList(nameFromRequest);
			res.send("success");
		} catch {
			res.send("Error!");
		}
	  });
	

};
