import Head from 'next/head';
import { usePathname } from 'next/navigation';

interface CanonicalUrlProps {
    path?: string;
}

export function CanonicalUrl({ path }: CanonicalUrlProps) {
    const pathname = usePathname();
    const baseUrl = 'https://shivamtrivedi.in';

    // Use the provided path or the current pathname
    const canonicalPath = path || pathname || '';

    // Clean the path (remove trailing slashes except for homepage)
    const cleanPath = canonicalPath === '/'
        ? ''
        : canonicalPath.replace(/\/$/, '');

    const canonicalUrl = `${baseUrl}${cleanPath}`;

    return (
        <Head>
            <link rel="canonical" href={canonicalUrl} />
        </Head>
    );
} 