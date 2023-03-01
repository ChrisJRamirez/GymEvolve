type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col 
  justify-center items-center whitespace-normal bg-primary-500 text-center 
  text-white opacity-0 transition duration-500 hover:opacity-90 hover:rounded-lg`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p>{name}</p>
        <p>{description}</p>
      </div>
      <img className="rounded-lg" alt={`${image}`} src={image} />
    </li>
  );
}

export default Class;
