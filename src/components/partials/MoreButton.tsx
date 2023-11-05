import { RiArrowRightSLine } from "react-icons/ri";

interface MoreButtonProps {
  desktop: boolean;
  link: any;
}

export default function MoreButton({ desktop, link }: MoreButtonProps) {
  return (
    <div
      className={`${desktop ? "hidden md:block" : "block md:hidden w-full"}`}
    >
      <a
        href={link}
        className="px-10 py-3 bg-secondary font-bold rounded block"
      >
        Voir plus
        <span>
          <RiArrowRightSLine className="inline" />
        </span>
      </a>
    </div>
  );
}
