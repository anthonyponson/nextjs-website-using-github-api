import { NextResponse } from 'next/server'
import courses from './data.json'

export async function GET(request) {
  return NextResponse.json(courses)
}

export async function POST(request) {
  const { title, authorName, publishDate, language } = await request.json()

  const newCourse = {
    title,
    authorName,
    publishDate,
    language,
  }
  courses.push(newCourse)

  return NextResponse.json({ courses })
}
