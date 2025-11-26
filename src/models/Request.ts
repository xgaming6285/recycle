import mongoose from 'mongoose';

const RequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name or company name'],
    maxlength: [100, 'Name cannot be more than 100 characters'],
  },
  material: {
    type: String,
    required: [true, 'Please specify the material'],
  },
  quantity: {
    type: String,
    required: [true, 'Please provide a quantity'],
  },
  location: {
    type: String,
    required: [true, 'Please provide a location'],
  },
  phone: {
    type: String,
    required: [true, 'Please provide a phone number'],
  },
  images: {
    type: [String], // Array of Base64 strings
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Request || mongoose.model('Request', RequestSchema);
