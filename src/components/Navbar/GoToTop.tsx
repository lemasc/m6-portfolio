import { Transition } from "@headlessui/react";

export function GotoTop({ top }: { top: boolean }) {
  return (
    <Transition
      show={!top}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className={`fixed bottom-4 right-4 p-4 z-50`}
    >
      <button
        title="Go to top"
        onClick={() =>
          window.scrollTo({
            behavior: "smooth",
            top: 0,
          })
        }
        className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg p-2 h-10 w-10 "
      >
        <i className="fa-solid fa-arrow-up" />
      </button>
    </Transition>
  );
}
