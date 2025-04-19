import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

// Hardcoded admin credentials (in a real app, this would be in a database)
const ADMIN_USERNAME = 'admin'
const ADMIN_PASSWORD = '$2a$10$TXzt3pI2SQgCnyYNkfMd/.wFvEqxWFf3LOjYLJr.aLcbzOmdDP.9C' // This is 'admin123' hashed

export async function POST(request: Request) {
  try {
    // Handle CORS
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    // Handle OPTIONS request for CORS
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, { headers })
    }

    const { username, password } = await request.json()

    console.log('Login attempt for username:', username) // Debug log

    // Check username
    if (username !== ADMIN_USERNAME) {
      console.log('Admin not found') // Debug log
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { 
          status: 401,
          headers
        }
      )
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, ADMIN_PASSWORD)
    
    console.log('Password valid:', isPasswordValid) // Debug log

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { 
          status: 401,
          headers
        }
      )
    }

    // Create response with cookie
    const response = NextResponse.json(
      { success: true },
      { headers }
    )
    
    response.cookies.set('admin_session', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      }
    )
  }
} 