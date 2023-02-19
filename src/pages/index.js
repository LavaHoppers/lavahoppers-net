import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
// import Script from 'next/script';

function HomePage() {
  return (
    <div>
      <Head>
        <title>LavaHoppers.net</title>
        <link rel="icon" href="/logo.png" />
        
      </Head>
      <h1>This is the Homepage</h1>
      <Link href="/super-search">super search</Link>
      <Image 
        src="/logo.png" 
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </div>
    
  );
}

export default HomePage