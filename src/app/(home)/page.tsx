import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">I&apos;m Kewei Yan</h1>
      <p className="text-fd-muted-foreground">
        I&apos;m a software engineer, welcome to my personal website.
      </p>
      <p className="text-fd-muted-foreground mt-2">
        You can check out my articles{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          here
        </Link>
        .
      </p>
    </main>
  );
}
