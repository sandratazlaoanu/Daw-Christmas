import mongoose from 'mongoose';
import ToDoList from '../models/Gift';
import { DATABASE_URL } from '../config/database';

export default class DriverManager {
	private MONGO_STRING: string = DATABASE_URL;
	private static _instance: DriverManager;

	private constructor() {}

	public async connect() {
		mongoose.connect(this.MONGO_STRING, {
			useNewUrlParser: true,
			useFindAndModify: false,
			useCreateIndex: true
		});

		let db = mongoose.connection;
		db.once('open', () => {
			console.log('Connected to ' + this.MONGO_STRING);
		});
	}

	public static get Instance() {
		if (this._instance) {
			return this._instance;
		} else {
			this._instance = new DriverManager();
			return this._instance;
		}
	}

	public async addNewList(listName: string) {
		let newList = new ToDoList({
			name: listName
		});

		return await newList.save();
	}

	public async getListByName(listName: string) {
		return await ToDoList.findOne({ name: listName }).exec();
	}

	public async getAllToDoLists() {
		return await ToDoList.find({}).exec();
	}

	public async deleteList(listName: string) {
		return await ToDoList.deleteOne({ name: listName }).exec();
	}
}
