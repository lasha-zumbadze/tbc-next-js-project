import Header from "@/components/Header";
import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Accordion from "@/components/Accordion";
import Footer from "@/components/Footer";

const ProfilePage = async () => {
  const { user, error, isLoading } = await getSession();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Header />
      <main>
        {user && (
          <div className="h-screen flex flex-col justify-center items-center bg-gray-50">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl w-full mx-4 md:mx-auto md:flex">
              <div className="md:w-1/3 flex flex-col items-center md:items-start">
                <Image
                  src={user.picture}
                  alt={user.name}
                  width={100}
                  height={100}
                  className="rounded-full mb-4"
                />
                <h2 className="text-2xl font-semibold mb-2">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
              <div className="md:w-2/3 mt-6 md:mt-0 md:ml-8">
                <Accordion title="Booking Info">
                  <p>Your booking details will appear here.</p>
                  {/* Add booking info details here */}
                </Accordion>
                <Accordion title="Shopping Cart">
                  <p>Your shopping cart products will appear here.</p>
                  {/* Add shopping cart details here */}
                </Accordion>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default withPageAuthRequired(ProfilePage, { returnTo: "/profile" });
