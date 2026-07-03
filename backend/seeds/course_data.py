import json

COURSE = [
    {
        "title": "Introduction",
        "icon": "📘",
        "order_number": 1,
        "blocks": [
            {
                "type": "hero",
                "title": "Hero",
                "content": json.dumps({
                    "title": "Mastering Database System with Python",
                    "subtitle":
                        "Learn how modern applications store, organize, and retrieve data efficiently using SQLite, SQLAlchemy, FastAPI, and Next.js through a real-world Inventory Management System."
                }),
                "sort_order": 1,
            },

            {
                "type": "objectives",
                "title": "Learning Objectives",
                "content": json.dumps({
                    "items": [
                        "Understand what a database is.",
                        "Recognize why databases are essential in software development.",
                        "Identify real-world applications that rely on databases.",
                        "Prepare for relational databases and SQL."
                    ]
                }),
                "sort_order": 2,
            },

            {
                "type": "paragraph",
                "title": "Overview",
                "content": """
        Every modern application relies on data.

        Whether you are sending a message on WhatsApp, ordering food through GoFood, shopping on Tokopedia, or checking your university grades, every interaction requires information to be stored safely and retrieved instantly.

        A database is the technology responsible for managing that information. It allows applications to organize millions of records, retrieve them efficiently, and ensure that data remains consistent even when thousands of users access the system simultaneously.

        Throughout this course, you will learn how databases work behind the scenes and how Python can interact with them to build real-world applications.
        """,
                "sort_order": 3,
            },

            {
                "type": "callout",
                "title": "Interesting Fact",
                "content": json.dumps({
                    "variant": "info",
                    "title": "Did You Know?",
                    "text":
                        "Every time you press the Like button on Instagram or complete an online payment, your action is recorded inside a database within milliseconds."
                }),
                "sort_order": 4,
            },

            {
                "type": "features",
                "title": "Where Databases Are Used",
                "content": json.dumps({
                    "title": "Databases Power Almost Every Industry",
                    "features": [
                        {
                            "title": "E-Commerce",
                            "description":
                                "Manage products, customers, shopping carts, and orders."
                        },
                        {
                            "title": "Social Media",
                            "description":
                                "Store posts, comments, followers, likes, and messages."
                        },
                        {
                            "title": "Banking",
                            "description":
                                "Securely record financial transactions and account balances."
                        },
                        {
                            "title": "Education",
                            "description":
                                "Manage students, grades, schedules, attendance, and academic records."
                        }
                    ]
                }),
                "sort_order": 5,
            },

            {
                "type": "stats",
                "title": "Database Statistics",
                "content": json.dumps({
                    "title": "Why Databases Matter",
                    "stats": [
                        {
                            "label": "Applications Using Databases",
                            "value": "99%"
                        },
                        {
                            "label": "Available 24 Hours",
                            "value": "24/7"
                        },
                        {
                            "label": "Records Managed",
                            "value": "Millions"
                        }
                    ]
                }),
                "sort_order": 6,
            },

            {
                "type": "comparison",
                "title": "Comparison",
                "content": json.dumps({
                    "leftTitle": "Without Database",
                    "rightTitle": "With Database",
                    "leftItems": [
                        "Data disappears after closing the application",
                        "Searching is slow",
                        "Duplicate information",
                        "Difficult to manage growing data"
                    ],
                    "rightItems": [
                        "Permanent data storage",
                        "Fast data retrieval",
                        "Consistent information",
                        "Scalable for millions of records"
                    ]
                }),
                "sort_order": 7,
            },

            {
                "type": "real_world",
                "title": "Real World Example",
                "content": json.dumps({
                    "title": "What Happens When You Like an Instagram Post?",
                    "app": "Instagram",
                    "scenario":
                        "When you tap the Like button, your application sends a request to the server. The server updates the database by inserting a new record into the likes table, recalculates the total number of likes, and sends the updated information back to your device all within a fraction of a second."
                }),
                "sort_order": 8,
            },

            {
                "type": "summary",
                "title": "Summary",
                "content": json.dumps({
                    "points": [
                        "Databases store information permanently.",
                        "Almost every modern application relies on databases.",
                        "Databases organize data efficiently for fast retrieval.",
                        "Python provides powerful tools to interact with databases.",
                        "The next chapter introduces the concept of Relational Databases."
                    ]
                }),
                "sort_order": 9,
            }

        ]
    },

    {
        "title": "Relational Database",
        "icon": "📊",
        "order_number": 2,
        "blocks": [

            {
                "type": "hero",
                "title": "Hero",
                "content": json.dumps({
                    "title": "Understanding Relational Databases",
                    "subtitle":
                        "Learn how modern applications organize data into multiple connected tables using Primary Keys, Foreign Keys, and SQL."
                }),
                "sort_order": 1,
            },

            {
                "type": "paragraph",
                "title": "Introduction",
                "content": json.dumps({
                    "text": """
                    A relational database stores information inside multiple related tables instead of one massive table.

                    Each table represents one real-world entity such as Products, Customers, Orders, Categories, or Employees.

                    Relationships between these tables eliminate duplicated data, improve consistency, and allow complex queries to be performed efficiently.
                    """
                }),
                "sort_order": 2,
            },

            {
                "type": "database_components",
                "title": "Understanding a Database Table",
                "content": json.dumps({

                    "table": {
                        "columns": [
                            "ProductID",
                            "Name",
                            "Price",
                            "CategoryID"
                        ],

                        "rows": [
                            [1, "Mouse", "150000", 1],
                            [2, "Keyboard", "350000", 1],
                            [3, "Monitor", "2500000", 2]
                        ],

                        "primaryKey": "ProductID",
                        "foreignKey": "CategoryID"
                    },

                    "explanations": [

                        {
                            "title": "Table",
                            "description":
                                "The Products table stores information about every product."
                        },

                        {
                            "title": "Row",
                            "description":
                                "Each row represents one product."
                        },

                        {
                            "title": "Column",
                            "description":
                                "Columns define the attributes of a product."
                        },

                        {
                            "title": "Primary Key",
                            "description":
                                "ProductID uniquely identifies every product."
                        },

                        {
                            "title": "Foreign Key",
                            "description":
                                "CategoryID connects each product to its category."
                        }

                    ]

                }),
                "sort_order": 3,
            },

            {
                "type": "database_schema",
                "title": "Inventory Database",
                "content": json.dumps({
                    "tables":[

                        {

                            "name":"Categories",

                            "columns":[
                                "id (PK)",
                                "name"
                            ]

                        },

                        {

                            "name":"Products",

                            "columns":[
                                "id (PK)",
                                "category_id (FK)",
                                "name",
                                "price",
                                "stock"
                            ]

                        },

                        {

                            "name":"Orders",

                            "columns":[
                                "id (PK)",
                                "product_id (FK)",
                                "quantity"
                            ]

                        }

                    ]

                }),
                "sort_order":4,
            },

            {
                "type":"relationship_visual",
                "title":"Relationship Types",

                "content":json.dumps({

                    "relations":[

                        {

                            "type":"one-to-one",

                            "title":"One-to-One",

                            "left":"User",

                            "right":"Passport",

                            "description":
                                "One user owns exactly one passport."

                        },

                        {

                            "type":"one-to-many",

                            "title":"One-to-Many",

                            "left":"Category",

                            "right":"Products",

                            "description":
                                "One category can contain many products."

                        },

                        {

                            "type":"many-to-one",

                            "title":"Many-to-One",

                            "left":"Products",

                            "right":"Category",

                            "description":
                                "Many products belong to one category."

                        },

                        {

                            "type":"many-to-many",

                            "title":"Many-to-Many",

                            "left":"Students",

                            "middle":"Enrollment",

                            "right":"Courses",

                            "description":
                                "Many students can join many courses."

                        }

                    ]

                }),
                "sort_order":5,
            },

            {
                "type": "sql_playground",
                "title": "SQL Fundamentals",
                "content": json.dumps({
                    "examples": [

                        {
                            "keyword": "CREATE",
                            "description": "Create a new table inside the database.",
                            "sql": """CREATE TABLE products (
                id INTEGER PRIMARY KEY,
                name TEXT,
                price REAL,
                stock INTEGER
            );"""
                        },

                        {
                            "keyword": "INSERT",
                            "description": "Insert a new record into a table.",
                            "sql": """INSERT INTO products
            (name, price, stock)
            VALUES
            ('Mouse', 150000, 20);"""
                        },

                        {
                            "keyword": "SELECT",
                            "description": "Retrieve data from a table.",
                            "sql": """SELECT *
            FROM products;"""
                        },

                        {
                            "keyword": "UPDATE",
                            "description": "Modify existing records.",
                            "sql": """UPDATE products
            SET stock = 25
            WHERE id = 1;"""
                        },

                        {
                            "keyword": "DELETE",
                            "description": "Remove records from a table.",
                            "sql": """DELETE FROM products
            WHERE id = 1;"""
                        }

                    ]
                }),
                "sort_order": 6,
            },

            {
                "type": "timeline",
                "title": "Designing a Relational Database",
                "content": json.dumps({

                    "steps":[
                        {
                            "title":"Identify Entities",
                            "description":"Find the real-world objects that need to be stored."
                        },
                        {
                            "title":"Create Tables",
                            "description":"Create one table for each entity."
                        },
                        {
                            "title":"Add Primary Keys",
                            "description":"Ensure every row has a unique identifier."
                        },
                        {
                            "title":"Create Relationships",
                            "description":"Connect tables using Foreign Keys."
                        },
                        {
                            "title":"Write SQL Queries",
                            "description":"Retrieve and manipulate the stored data."
                        }
                    ]

                }),
                "sort_order": 8,
            }

        ]
    },

    {
        "title": "SQLite with Python",
        "icon": "🐍",
        "order_number": 3,
        "blocks": [

            {
                "type": "sqlite_journey",
                "title": "SQLite Journey",
                "content": json.dumps({}),
                "sort_order": 1,
            }

        ]
    },

    {
    "title": "CRUD Operations",
        "icon": "📝",
        "order_number": 4,
        "blocks": [
            {
                "type": "crud_journey",
                "title": "CRUD Operations",
                "content": json.dumps({}),
                "sort_order": 1,
            }
        ]
    },

    {
        "title": "Inventory Management System",
        "icon": "📦",
        "order_number": 5,
        "blocks": [

            {
                "type": "hero",
                "title": "Hero",
                "content": json.dumps({
                    "title": "Inventory Management System",
                    "subtitle":
                        "See how everything you've learned comes together into a complete full-stack application built with SQLite, SQLAlchemy, FastAPI, and Next.js."
                }),
                "sort_order": 1,
            },

            {
                "type": "inventory_journey",
                "title": "Inventory Management System",
                "content": json.dumps({}),
                "sort_order": 2,
            },

            {
                "type": "project_link",
                "title": "Try the Application",
                "content": json.dumps({
                    "title": "Inventory Management System",
                    "description":
                        "Now it's time to explore the complete application. Try adding, editing, viewing, and deleting products to see how every concept from this workshop works together.",
                    "buttonText": "Open Inventory System",
                    "href": "/inventory"
                }),
                "sort_order": 3,
            }

        ]
    }
]