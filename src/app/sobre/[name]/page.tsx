type Props = {
  params: {
    name:string
  };
}

const Page = ({params}: Props) => {
  return(
    <div className="container mx-auto">
      <h1 className="text-5xl mb-5">Sobre {params.name}</h1>
    </div>
  );
}

export default Page