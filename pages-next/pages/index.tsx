import {
  type FormEvent,
  type FC,
  type PropsWithChildren,
  useEffect,
} from "react";

type TestCompProps = PropsWithChildren<{ name: string }>;

function TestComp(props: TestCompProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const fd = new FormData(e.currentTarget);
  }
  return <form onSubmit={handleSubmit}></form>;
}
const key = "2082968eb10c43ba8c10b29453ec57c7";
export default function Home() {
  useEffect(() => {
    console.log(
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          console.log(pos);
        },
        (err) => {
          console.log(err);
        },
        {
          enableHighAccuracy: true,
        }
      )
    );
  }, []);
  return (
    <>
      <main className="bg-blue-500 h-[100vh]">
        <TestComp name="namename">2</TestComp>
      </main>
    </>
  );
}
