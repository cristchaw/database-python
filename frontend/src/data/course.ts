import { Course } from "@/types/course";

export const course: Course = {
  title: "Mastering Database System with Python",

  chapters: [
    {
      id: 1,
      icon: "📖",
      title: "Introduction",
      blocks: [
        {
          id: "intro",
          type: "paragraph",
          data: `Welcome to DBVerse. Throughout this workshop, you'll learn how databases work, how Python interacts with databases, and how these concepts are applied in a real Inventory Management System.`,
        },
        {
          id: "obj",
          type: "objectives",
          data: [
            "Understand what a database is",
            "Understand basic database structure",
            "Connect Python with a database",
            "See a real-world implementation",
          ],
        },
      ],
    },

    {
      id: 2,
      icon: "💾",
      title: "What is Database?",

      blocks: [

        {
          id: "paragraph",
          type: "paragraph",
          data: `A database is an organized collection of data that allows applications to efficiently store and retrieve information.`,
        },

        {
          id: "comparison",

          type: "comparison",

          data: {

            leftTitle: "Spreadsheet",

            rightTitle: "Database",

            leftItems: [
              "Manual editing",
              "Hard to scale",
              "Single user",
              "Limited relationships",
            ],

            rightItems: [
              "Fast querying",
              "Scalable",
              "Multi-user",
              "Supports relationships",
            ],
          },
        },
      ],
    },

    {
      id: 3,

      icon: "🗄",

      title: "Database Structure",

      blocks: [

        {
          id: "paragraph",

          type: "paragraph",

          data:
            "A relational database stores information inside tables. Each table contains rows and columns. Every record is uniquely identified using a Primary Key.",
        },

        {
          id: "products",

          type: "table",

          data: {

            title: "Products",

            columns: [
              "ID",
              "Name",
              "Stock",
              "Price"
            ],

            rows: [

              [
                "1",
                "Keyboard",
                "20",
                "$50"
              ],

              [
                "2",
                "Mouse",
                "15",
                "$25"
              ],

              [
                "3",
                "Monitor",
                "8",
                "$180"
              ]

            ],

            primaryKey: 0,

          },

        },

      ],

    },

    {
      id: 4,
      icon: "🐍",
      title: "Database with Python",
      blocks: [
        {
          id: "python",
          type: "paragraph",
          data: `Python provides built-in support for SQLite through the sqlite3 module, allowing us to execute SQL queries directly from our application.`,
        },
        {
          id: "code",
          type: "code",
          data: {
            language: "Python",
            code: `import sqlite3

conn = sqlite3.connect("inventory.db")

cursor = conn.cursor()

cursor.execute("SELECT * FROM products")

print(cursor.fetchall())`,
          },
        },
      ],
    },

    {
      id: 5,
      icon: "📦",
      title: "Inventory Demo",
      blocks: [
        {
          id: "demo",
          type: "paragraph",
          data: `Everything you've learned today comes together inside an Inventory Management System where products, stock, and transactions are stored inside a database and accessed using Python.`,
        },
      ],
    },
  ],
};