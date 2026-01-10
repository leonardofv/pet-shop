type props = {
  title: string;
};

const Component = ({ title }: props) => {
  return (
    <>
      <h2>Teste component</h2>
    </>
  );
};

export default function Home() {
  return (
    <div>
      <h2>Hello Next</h2>
      <Component title={1} />
    </div>
  );
}
