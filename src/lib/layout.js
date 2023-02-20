import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export function Default({title, content}) {
    return (
      <div>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/logo.png" />
        </Head>
        <br/>
        <br/>
        <h1>{title}</h1>
        <div className="content">
            {content}
        </div>
      </div>
    );
  }