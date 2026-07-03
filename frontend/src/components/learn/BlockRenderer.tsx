import { Block } from "@/types/course";

import Hero from "@/components/blocks/Hero";
import LearningObjectives from "@/components/blocks/LearningObjectives";
import FeatureGrid from "@/components/blocks/FeatureGrid";
import Comparison from "@/components/blocks/Comparison";
import DatabaseTable from "@/components/blocks/DatabaseTable";
import ArchitectureDiagram from "@/components/blocks/ArchitectureDiagram";
import CodeBlock from "@/components/blocks/CodeBlock";
import Summary from "@/components/blocks/Summary";
import ProjectLink from "@/components/blocks/ProjectLink";
import Callout from "@/components/blocks/Callout";
import Statistics from "@/components/blocks/Statistics";
import RealWorldExample from "@/components/blocks/RealWorldExample";
import EntityCards from "@/components/blocks/EntityCards";
import DatabaseSchema from "@/components/blocks/DatabaseSchema";
import RelationshipCards from "@/components/blocks/RelationshipCards";
import SQLCheatSheet from "@/components/blocks/SQLCheatSheet";
import Timeline from "@/components/blocks/Timeline";
import MiniQuiz from "@/components/interactive/MiniQuiz";
import DatabaseComponents from "@/components/blocks/DatabaseComponents";
import RelationshipVisual from "@/components/blocks/RelationshipVisual";
import SQLPlayground from "@/components/blocks/SQLPlayground";
import SQLiteJourney from "@/components/blocks/SQLiteJourney";
import CRUDJourney from "@/components/blocks/CRUDJourney";
import InventoryJourney from "@/components/blocks/InventoryJourney";

import { parseContent } from "@/lib/block";

interface Props {
  block: Block;
}

export default function BlockRenderer({
  block,
}: Props) {
  const data = parseContent(block.content);

  switch (block.type) {
    case "paragraph":
      return (
        <section className="space-y-4">
          {block.title && (
            <h2 className="text-3xl font-bold">
              {block.title}
            </h2>
          )}

          <p className="max-w-4xl whitespace-pre-line text-lg leading-8 text-zinc-400">
            {data.text}
          </p>
        </section>
      );

    case "hero":
      return (
        <Hero
          title={data.title}
          subtitle={data.subtitle}
        />
      );

    case "objectives":
      return (
        <LearningObjectives
          objectives={data.items}
        />
      );

    case "features":
      return (
        <FeatureGrid
          title={data.title}
          features={data.features}
        />
      );

    case "comparison":
      return (
        <Comparison
          leftTitle={data.leftTitle}
          rightTitle={data.rightTitle}
          leftItems={data.leftItems}
          rightItems={data.rightItems}
        />
      );

    case "diagram":
      return (
        <ArchitectureDiagram
          type={data.type}
        />
      );

    case "table":
      return (
        <DatabaseTable
          title={data.title}
          columns={data.columns}
          rows={data.rows}
          primaryKey={data.primaryKey}
        />
      );

    case "code":
      return (
        <CodeBlock
          language={data.language}
          code={data.code}
        />
      );

    case "summary":
      return (
        <Summary
          points={data.points}
        />
      );

    case "project_link":
      return (
        <ProjectLink
          title={data.title}
          description={data.description}
          buttonText={data.buttonText}
          href={data.href}
        />
      );

    case "callout":
      return (
        <Callout
          variant={data.variant}
          title={data.title}
          text={data.text}
        />
      );

    case "stats":
      return (
        <Statistics
          title={data.title}
          stats={data.stats}
        />
      );

    case "real_world":
      return (
        <RealWorldExample
          title={data.title}
          app={data.app}
          scenario={data.scenario}
        />
      );

    case "entity_cards":
      return (
        <EntityCards
          entities={data.items}
        />
      );

    case "database_schema":
      return (
        <DatabaseSchema
          tables={data.tables}
        />
      );

    case "relationship_cards":
      return (
        <RelationshipCards
          relations={data.relations}
        />
      );

    case "sql_cheatsheet":
      return (
        <SQLCheatSheet
          queries={data.queries}
        />
      );

    case "timeline":
      return (
        <Timeline
          steps={data.steps}
        />
      );

    case "mini_quiz":
      return (
        <MiniQuiz
          question={data.question}
          options={data.options}
          answer={data.answer}
        />
      );

    case "database_components":
      return (
        <DatabaseComponents
          table={data.table}
          explanations={data.explanations}
        />
      );

    case "relationship_visual":
      return (
        <RelationshipVisual
          relations={data.relations}
        />
      );

    case "sql_playground":
      return (
        <SQLPlayground
          examples={data.examples}
        />
      );

    case "sqlite_journey":
      return <SQLiteJourney />;

    case "crud_journey":
      return <CRUDJourney />;

    case "inventory_journey":
      return <InventoryJourney />;

    default:
      return (
        <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-6">
          <p className="font-semibold text-red-400">
            Unknown block type
          </p>

          <p className="mt-2 text-zinc-400">
            {block.type}
          </p>
        </div>
      );
  }
}