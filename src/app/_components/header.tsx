import Image from "next/image";

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <div className="flex flex-col items-center py-4">
      <div className="mb-10 mt-9">
        <Image width={128} height={36} src="/logo.png" alt="Woovi Logo" />
      </div>
      <div className="text-2xl font-extrabold text-secondary text-center text-balance">
        {text}
      </div>
    </div>
  );
};

export default Header;
