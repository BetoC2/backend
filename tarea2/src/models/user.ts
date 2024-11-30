import { Schema, model, SchemaTypes } from 'mongoose';

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  status: { type: String, default: 'active' }
});

const user = model('user', schema);
export default user;