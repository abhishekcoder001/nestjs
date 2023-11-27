import { Schema } from 'mongoose';

export const productsSchema = new Schema(
  {
    id: {
      type: Number,
    },
    title:{
        type: String,
        required:true
    },
    description: String,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
