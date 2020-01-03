import mongoose, { Schema, Document } from 'mongoose';

export interface IGift extends Document {
	name: string;
}

const ListSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
			index: true
		}
	},
	{ collection: 'christmas-app' }
);

export default mongoose.model<IGift>('christmas-app', ListSchema);
