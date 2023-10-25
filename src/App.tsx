import UserDetailsList from "./components/UserDetailsList";

function App() {
  return (
    <>
      <main className="w-screen h-screen flex flex-col justify-center align-center bg-[#f0f0f0]">
        <section className="flex flex-col relative w-auto max-h-[600px] py-[20px] mx-auto overflow-y-scroll scroll-smooth">
          <UserDetailsList />
        </section>
      </main>
    </>
  );
}

export default App;
