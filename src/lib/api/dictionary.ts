export async function getMeaningFromApi(word: string) {
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    return null
  }
}


import { NextRequest, NextResponse } from 'next/server'; 
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const word = searchParams.get('word');
 
    if (!word) {
      return NextResponse.json(
        { error: 'Word parameter is required' },
        { status: 400 }
      );
    }
 
    const result = await getMeaningFromApi(word);
   
    if (!result) {
      return NextResponse.json(
        { error: 'Failed to fetch word meaning' },
        { status: 500 }
      );
    }
 
    return NextResponse.json(result);
  } catch (error) {
    console.error('Dictionary API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}