import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname.toLowerCase();
  if (hostname === 'www.isun1.com') {
    const target = new URL(request.nextUrl.pathname + request.nextUrl.search, 'https://isun1.com');
    return NextResponse.redirect(target, 308);
  }
  const response = NextResponse.next();
  // The same release serves the approved domain and its retained preview.
  // Keep all preview hosts out of search results, including error responses.
  if (hostname !== 'isun1.com') {
    response.headers.set('X-Robots-Tag', 'noindex, follow');
  }
  return response;
}
