require('dotenv').config()
const mongoose = require('mongoose')
const Admin = require('./src/models/Admin')

async function createAdmin() {
  try {
    await mongoose.connect('mongodb://localhost:27017/icmgweb')
    console.log('Connected to MongoDB')
    
    const admin = new Admin({
      username: 'admin',
      password: 'admin123'
    })

    await admin.save()
    console.log('Admin user created successfully')
  } catch (error) {
    console.error('Error:', error)
  } finally {
    await mongoose.disconnect()
  }
}

createAdmin() 