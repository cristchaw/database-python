"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";

interface Props {
  title: string;
  columns: string[];
  rows: string[][];
  primaryKey: number;
}

type Mode =
  | "none"
  | "rows"
  | "columns"
  | "pk";

export default function DatabaseTable({
  title,
  columns,
  rows,
  primaryKey,
}: Props) {
  const [mode, setMode] = useState<Mode>("none");

  return (
    <Section title="🗄 Database Table">

      <div className="mb-6 flex flex-wrap gap-3">

        <button
          onClick={() => setMode("rows")}
          className="rounded-lg bg-cyan-500 px-4 py-2 font-medium text-black"
        >
          Show Rows
        </button>

        <button
          onClick={() => setMode("columns")}
          className="rounded-lg bg-cyan-500 px-4 py-2 font-medium text-black"
        >
          Show Columns
        </button>

        <button
          onClick={() => setMode("pk")}
          className="rounded-lg bg-cyan-500 px-4 py-2 font-medium text-black"
        >
          Show Primary Key
        </button>

        <button
          onClick={() => setMode("none")}
          className="rounded-lg bg-zinc-700 px-4 py-2"
        >
          Reset
        </button>

      </div>

      <div className="overflow-hidden rounded-xl border border-zinc-800">

        <table className="w-full">

          <thead>

            <tr>

              {columns.map((column, index) => (

                <th
                  key={column}
                  className={`border border-zinc-800 px-5 py-3 text-left transition

                  ${
                    mode === "columns"
                      ? "bg-yellow-500 text-black"
                      : ""
                  }

                  ${
                    mode === "pk" &&
                    index === primaryKey
                      ? "bg-cyan-500 text-black"
                      : ""
                  }
                  `}
                >
                  {column}
                </th>

              ))}

            </tr>

          </thead>

          <tbody>

            {rows.map((row, rowIndex) => (

              <tr
                key={rowIndex}
                className={
                  mode === "rows"
                    ? "bg-green-500/20"
                    : ""
                }
              >

                {row.map((cell, cellIndex) => (

                  <td
                    key={cellIndex}
                    className={`border border-zinc-800 px-5 py-3 transition

                    ${
                      mode === "columns"
                        ? "bg-yellow-500/10"
                        : ""
                    }

                    ${
                      mode === "pk" &&
                      cellIndex === primaryKey
                        ? "bg-cyan-500 text-black font-bold"
                        : ""
                    }
                    `}
                  >
                    {cell}
                  </td>

                ))}

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </Section>
  );
}