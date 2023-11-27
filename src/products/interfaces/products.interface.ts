import { Document } from 'mongoose';

export interface IProduct extends Document {
  readonly id: Number;
  readonly title: string;
  readonly description: string;
}
