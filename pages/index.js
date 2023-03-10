import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container m-auto p-10">
        <div className="h-96 flex flex-col justify-center mb-10">
          <h1 className="text-5xl font-bold">hello</h1>
          <p className="mt-10 text-2xl w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Amet dolorum exercitationem incidunt inventore molestiae optio possimus voluptatibus!
            Ab cum eaque earum eos laudantium maxime, mollitia nulla quos.
            At, consectetur cumque debitis distinctio doloremque, enim maxime quasi quia tempore tenetur totam vitae!
            Error minima perspiciatis voluptates!
          </p>
        </div>

      </main>

    </>
  );
}
