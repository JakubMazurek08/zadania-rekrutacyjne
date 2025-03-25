import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import buildConfig from '@payload-config';

export async function GET() {
  try {
    const payload = await getPayload({ config: buildConfig });
    const products = await payload.find({
      collection: 'products',
      depth: 2,
    });

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}