import mongoose from 'mongoose'

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  birthPlace: {
    type: String,
    required: true,
  },
  birthDate: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  membershipFee: {
    type: String,
    required: true,
  },
  customFee: {
    type: String,
  },
  giftAid: {
    type: String,
    required: true,
    enum: ['yes', 'no'],
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Member || mongoose.model('Member', memberSchema) 