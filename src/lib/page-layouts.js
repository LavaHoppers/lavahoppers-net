import Head from 'next/head';


/**
 * A default layout is just a large center column, a sidbar, and a tile at the top. Useful for things like a text page.
 */
export function Default({title, content}) {
    return (
      <div>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/logo.png"/>
        </Head>
        <br/>
        <br/>
        <h1>{title}</h1>
        <div className="container">
          <div className="sidenav">This is some testing text. This text will be removed when I find something to put on the sidebar for real.</div>
          <div className="content">{content}</div>
        </div>
      </div>
    );
  }
