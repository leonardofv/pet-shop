type props = {
  title: string;
};

const Component = ({ title }: props) => {
  return <h2>Component</h2>;
};

export default function Home() {
  return (
    <div>
      <h2>Hello World!</h2>
      <Component title={1} />
    </div>
  );
}
