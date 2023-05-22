import { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import styles from "./comboBox.module.scss";

type Club = { id: number | null; name: string };

const clubs = [
  { id: 1, name: "Real Madrid" },
  { id: 2, name: "Manchester United" },
  { id: 3, name: "Tottenham Hotspur" },
  { id: 4, name: "FC Barcelona" },
  { id: 5, name: "Inter Mediolan" },
];

const ComboboxComp = () => {
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");

  const filteredSearch =
    query === ""
      ? clubs
      : clubs.filter((club) => {
          return club.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className={styles.container}>
      <Combobox value={selected} onChange={setSelected}>
        <div className={styles.relativeContainer}>
          <div className={styles.inputWrapper}>
            <Combobox.Input
              className={styles.input}
              displayValue={(club: Club) => club.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className={styles.button}>
              <ChevronUpIcon
                className={styles.chevronIcon}
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className={styles.options}>
              {filteredSearch.length === 0 && query !== "" ? (
                <div className={styles.option}>Nothing found.</div>
              ) : (
                filteredSearch.map((club) => (
                  <Combobox.Option key={club.id} value={club}>
                    {({ selected, active }) => (
                      <>
                        <div
                          className={`${styles.option} ${
                            active ? styles.active : ""
                          }`}
                        >
                          <span
                            className={`block truncate ${
                              selected ? styles.selected : ""
                            }`}
                          >
                            {club.name}
                          </span>
                          {selected ? (
                            <span
                              className={`${styles.checkIconContainer} ${
                                active ? styles.active : ""
                              }`}
                            >
                              <CheckIcon
                                className={styles.checkIcon}
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </div>
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default ComboboxComp;
