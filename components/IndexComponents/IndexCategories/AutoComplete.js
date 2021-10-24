import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

const AutoComplete = ({
  data = [],
  group,
  setGroup,
  category,
  setCategory,
  search = "",
  setSearch,
  onSelect,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursor, setCursor] = useState(-1);

  const searchContainer = useRef(null);
  const searchResultRef = useRef(null);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollIntoView = (position) => {
    searchResultRef.current.parentNode.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (cursor < 0 || cursor > suggestions.length || !searchResultRef) {
      return () => {};
    }
    let listitem = Array.from(searchResultRef.current.children);
    listitem[cursor] && scrollIntoView(listitem[cursor].offsetTop);
  }, [cursor]);

  const suggestions = useMemo(() => {
    if (!search) return data;
    setCursor(-1);
    // scrollIntoView(0);
    return data.filter((item) =>
      item.n.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  const handleClickOutside = (event) => {
    if (
      searchContainer.current &&
      !searchContainer.current.contains(event.target)
    ) {
      hideSuggestions();
    }
  };

  const showSuggestions = () => {
    setIsVisible(true);
  };
  const hideSuggestions = () => {
    setIsVisible(false);
  };

  const keyboardNavigation = (e) => {
    if (e.key === "ArrowDown") {
      isVisible && setCursor((c) => (c < suggestions.length - 1 ? c + 1 : c));
      console.log(cursor);
    }
    if (e.key === "ArrowUp") {
      isVisible && setCursor((c) => (c > 0 ? c - 1 : 0));
      console.log(cursor);
    }
    if (e.key === "Escape") {
      setIsVisible(false);
    }
    if (e.key === "Enter" && cursor > 0) {
      hideSuggestions();
      setSearch(suggestions[cursor].n);
      setGroup(suggestions[cursor].label);
      setCategory(suggestions[cursor].c);
      onSelect(suggestions[cursor]);
    }
  };

  return (
    <div className="pt-4 relative mx-auto text-gray-600" ref={searchContainer}>
      <input
        className="border-2 w-full border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-brand-100"
        type="search"
        value={search}
        name="search"
        placeholder="Search"
        autoComplete="off"
        onClick={showSuggestions}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => keyboardNavigation(e)}
      />
      {isVisible && (
        <div className="shadow-md absolute top-16 rounded-lg overflow-y-scroll left-0 h-auto max-h-48 p-2 w-full bg-white">
          <ul ref={searchResultRef}>
            {suggestions.map((each, i) => {
              return (
                <ListItem
                  key={i}
                  item={each}
                  isActive={cursor === i ? true : false}
                  onSelectItem={() => {
                    hideSuggestions();
                    setSearch(each.n);
                    setGroup(each.label);
                    setCategory(each.c);
                    onSelect(each);
                  }}
                />
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

const ListItem = ({ item = {}, onSelectItem, isActive }) => {
  return (
    <li onClick={onSelectItem}>
      <Link href="#products">
        <div
          className={`${isActive ? "bg-gray-200" : "bg-white"}
          p-2 hover:bg-gray-100 cursor-pointer font-medium text-gray-500 hover:text-gray-900 capitalize`}
        >
          {item.n}
        </div>
      </Link>
    </li>
  );
};

export default AutoComplete;
