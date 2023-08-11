import { type NextPage } from "next";
import Head from "next/head";
import { SignIn, SignInButton, useUser, SignOutButton } from "@clerk/nextjs";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const user = useUser();

  const { data } = api.posts.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Marc Nichol Portfolio</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-#fbfbfb flex min-h-screen flex-col items-center justify-center">
        <h1 id="accenthdr" className="-m-32">CAPTURED</h1>
        <h1>VISIONS</h1>
        <p className="text-xl text-center px-96 uppercase">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard
        </p>
        <div>
          {!user.isSignedIn && <SignInButton />}
          {!!user.isSignedIn && <SignOutButton />}
        </div>
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        <div>
          <button className="mainbtn">Hey!</button>
        </div>
      </main>
    </>
  );
};

export default Home;
