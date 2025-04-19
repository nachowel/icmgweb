import { NextResponse } from 'next/server'
import dbConnect from '@/lib/db'
import Member from '@/models/Member'

// Get all members
export async function GET() {
  try {
    await dbConnect()
    const members = await Member.find().sort({ createdAt: -1 })
    return NextResponse.json(members)
  } catch (error) {
    console.error('Get members error:', error)
    return NextResponse.json(
      { error: 'Bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    )
  }
}

// Create new member
export async function POST(request: Request) {
  try {
    await dbConnect()
    const data = await request.json()
    const member = await Member.create(data)
    return NextResponse.json(member, { status: 201 })
  } catch (error) {
    console.error('Create member error:', error)
    return NextResponse.json(
      { error: 'Bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    )
  }
} 