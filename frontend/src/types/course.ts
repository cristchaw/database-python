export interface Block {
  id: number;
  chapter_id: number;
  type:
    | "hero"
    | "paragraph"
    | "objectives"
    | "features"
    | "comparison"
    | "diagram"
    | "table"
    | "code"
    | "summary"
    | "callout"
    | "stats"
    | "real_world"
    | "project_link"
    | "entity_cards"
    | "database_schema"
    | "relationship_cards"
    | "sql_cheatsheet"
    | "mini_quiz"
    | "timeline"
    | "database_components"
    | "relationship_visual"
    | "sql_playground"
    | "sqlite_journey"
    | "crud_journey"    
    | "inventory_journey";    


  title: string | null;

  content: string;

  sort_order: number;
}

export interface Chapter {
  id: number;
  title: string;
  icon: string;
  order_number: number;
  blocks: Block[];
}

export interface Course {
  title: string;
  chapters: Chapter[];
}