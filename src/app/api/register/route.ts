import { NextResponse } from 'next/server'
import { serverClient } from '@/sanity/lib/sanityServer'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const doc = {
      _type: 'signup',
      ...body,
      createdAt: new Date().toISOString(),
    }

    const created = await serverClient.create(doc)

    return NextResponse.json({ success: true, id: created._id })
  } catch (error) {
    console.error('Sanity registration error:', error)
    return NextResponse.json(
      { error: 'Failed to save registration' },
      { status: 500 }
    )
  }
}
