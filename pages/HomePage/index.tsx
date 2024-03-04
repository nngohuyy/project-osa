import { Button, ButtonGroup } from "@nextui-org/react";

export default function HomePage() {
  return (
    <main className="px-40">
      <div className="px-40 mt-10">
        <div className="header">
          <div className="mt-96 mb-10 px-40 text-center flex flex-col gap-6">
            <div className="text-5xl font-bold">
              OISP International Festival 2024
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione alias quam maiores culpa. Itaque perferendis, nisi porro explicabo velit enim doloremque officia doloribus nesciunt? Harum fuga molestiae quasi blanditiis enim.
            </p>
            <div className="flex gap-4 items-center justify-center">
              <Button color="primary" variant="solid">
                Register now
              </Button>
              <Button color="primary" variant="faded">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="section-content">
        <h1>View recent OSA events</h1>
      </div>
    </main>
  );
}