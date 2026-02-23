import { NextResponse } from 'next/server';
import path from 'path';
import { writeFile, readFile, mkdir } from 'fs/promises';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            return NextResponse.json({ message: 'Invalid email address' }, { status: 400 });
        }

        const dataDir = path.join(process.cwd(), '.data');
        const dataFile = path.join(dataDir, 'emails.json');

        try {
            await mkdir(dataDir, { recursive: true });
        } catch (error) {
            // Ignore error if directory already exists
            if ((error as NodeJS.ErrnoException).code !== 'EEXIST') {
                throw error;
            }
        }

        let emails: string[] = [];
        try {
            const data = await readFile(dataFile, 'utf8');
            emails = JSON.parse(data);
        } catch (error) {
            if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
                throw error;
            }
        }

        if (emails.includes(email)) {
            return NextResponse.json({ message: 'Email already exists' }, { status: 409 });
        }

        emails.push(email);

        await writeFile(dataFile, JSON.stringify(emails, null, 2));

        return NextResponse.json({ message: 'Email received' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
