type Props = {
  params: {
    slug:string []
  };
}

const Page = ({params}: Props) => {
  return(
    <div className="container mx-auto">
      filtros: {params.slug.join(', ')}
    </div>
  );
}

export default Page