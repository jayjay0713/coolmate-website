import { FaFacebookMessenger } from "react-icons/fa";

export default function FloatingMessenger() {
  return (
    <a
      href="https://m.me/61580222981185"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on Messenger"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-3
        rounded-full
        bg-[#0084FF]
        px-5
        py-4
        text-white
        shadow-xl
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-2xl
        animate-pulse
      "
    >
      <FaFacebookMessenger className="h-7 w-7 flex-shrink-0" />

      {/* Desktop Label */}
      <span className="hidden font-semibold lg:block">
        Chat with us
      </span>
    </a>
  );
}