import { useState, useRef, useEffect } from "react";

export default function MultiSelectDropdown() {
  const options: string[] = [
    "Ayam Geprek",
    "Soto",
    "Nasi Goreng",
    "Mie Ayam",
    "Bakso",
    "Ayam Bakar",
  ];

  const [selected, setSelected] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (item: string) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((x) => x !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  const filtered = options.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full" ref={dropdownRef}>
      <label className="block font-medium text-gray-700 mb-1">Pilih Menu</label>

      <div
        onClick={() => setOpen(!open)}
        className="border border-gray-300 bg-gray-50 px-4 py-2 rounded-lg cursor-pointer flex justify-between items-center"
      >
        <span className="text-gray-700">
          {selected.length === 0 ? "— Pilih menu —" : selected.join(", ")}
        </span>
        <span>▾</span>
      </div>

      {open && (
        <div className="mt-2 border border-gray-300 bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto">
          <div className="p-2 border-b">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-md px-3 py-1"
            />
          </div>

          <div className="max-h-48 overflow-y-auto">
            {filtered.map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-gray-100"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(item)}
                  onChange={() => toggleOption(item)}
                />
                <span>{item}</span>
              </label>
            ))}

            {filtered.length === 0 && (
              <p className="text-center text-gray-400 py-3">Tidak ditemukan</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
