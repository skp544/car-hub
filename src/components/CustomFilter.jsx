import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDown } from "../assets";

const CustomFilter = ({ title, options, setFilter }) => {
  const [selected, setSelected] = useState(options[0]);
  console.log(options);
  console.log(selected);

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          setFilter(e.value);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className={"custom-filter__btn"}>
            <span className="block truncate">{selected && selected.title}</span>
            <img
              src={ChevronUpDown}
              width={20}
              height={20}
              className="m-4 object-contain"
              alt="chevron-up-down"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-10"
          >
            <Listbox.Options className={"custom-filter__options"}>
              {options &&
                options?.map((option) => (
                  <Listbox.Option
                    key={option.title}
                    value={option}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-4 ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                  >
                    {({ selected }) => (
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option?.title}
                      </span>
                    )}
                  </Listbox.Option>
                ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
