import { type ReactElement } from "react";
import { Section } from "@/components/templates";
import { FullWidthLayout } from "@/components/layouts";
import { InteractiveParagraph } from "@/components/molecules/InteractiveParagraph";
import { EditableText } from "@/components/editing/EditableText";
import { InlineStepper } from "@/components/atoms/InlineStepper";
import { InlineTextInput } from "@/components/atoms/InlineTextInput";
import { InlineDropdown } from "@/components/atoms/InlineDropdown";

// Initialize variables from this file's variable definitions
import { useVariableStore } from "@/stores";
import { getDefaultValues } from "./variables";
useVariableStore.getState().initialize(getDefaultValues());

/**
 * ------------------------------------------------------------------
 * SECTION CONFIGURATION
 * ------------------------------------------------------------------
 * This file is the entry point for your lesson content.
 * 
 * INSTRUCTIONS:
 * 1. Create your content using the <Section> component.
 * 2. Use Layout components to organize your sections.
 * 3. Add your sections to the `sections` array below.
 * 
 * ------------------------------------------------------------------
 * CROSS-SECTION VARIABLES
 * ------------------------------------------------------------------
 * Variables can be shared across sections using the global store.
 * 
 * DEFINE VARIABLES: src/data/variables.ts
 * 
 * USAGE IN SECTIONS:
 * 
 * // Reading a value (auto-updates when changed):
 * import { useVar } from '@/stores';
 * const amplitude = useVar('amplitude', 1);
 * 
 * // Setting a value:
 * import { useSetVar } from '@/stores';
 * const setVar = useSetVar();
 * setVar('amplitude', 2.5);
 * 
 * ------------------------------------------------------------------
 * AVAILABLE LAYOUTS
 * ------------------------------------------------------------------
 * 
 * 1. FullWidthLayout
 *    - Best for: Title headers, introductory text, broad visualizations.
 *    - Usage:
 *      <FullWidthLayout maxWidth="xl">
 *          <Section id="intro">...</Section>
 *      </FullWidthLayout>
 * 
 * 2. SplitLayout
 *    - Best for: Side-by-side content (e.g., Text + Visualization).
 *    - Usage:
 *      <SplitLayout ratio="1:1" gap="lg">
 *          <Section id="left">...</Section>
 *          <Section id="right">...</Section>
 *      </SplitLayout>
 * 
 * 3. GridLayout
 *    - Best for: Multiple equal-sized items (cards, galleries).
 *    - Usage:
 *      <GridLayout columns={3} gap="md">
 *          <Section id="item-1">...</Section>
 *          <Section id="item-2">...</Section>
 *          <Section id="item-3">...</Section>
 *      </GridLayout>
 * 
 * 4. SidebarLayout
 *    - Best for: Main content with a sticky sidebar (glossary, controls).
 *    - Usage:
 *      <SidebarLayout sidebarPosition="left" sidebarWidth="medium">
 *          <Sidebar><Section id="sidebar">...</Section></Sidebar>
 *          <Main><Section id="main">...</Section></Main>
 *      </SidebarLayout>
 * 
 * EXAMPLES:
 * See `src/data/exampleSections.tsx` for comprehensive examples.
 * 
 * NOTE: If you are seeing examples in the browser instead of this content,
 * check your .env file and set VITE_SHOW_EXAMPLES=false.
 */

export const sections: ReactElement[] = [
    <FullWidthLayout key="math-in-nature" maxWidth="xl">
        <Section id="intro">
            <EditableText as="h1" className="text-3xl font-bold mb-6 text-foreground">
                Mathematics in Nature
            </EditableText>

            <InteractiveParagraph className="mb-4 text-muted-foreground">
                <EditableText as="span">
                    Mathematics is the language of the universe. From the spirals of galaxies to the patterns in a sunflower, numbers and shapes reveal the hidden order in nature. Let's explore these fascinating connections together!
                </EditableText>
            </InteractiveParagraph>

            <InteractiveParagraph className="mb-4 text-muted-foreground">
                Have you ever wondered why honeybees build hexagonal cells? A hexagon has{" "}
                <InlineStepper
                    initialValue={6}
                    min={3}
                    max={12}
                    color="#D81B60"
                    bgColor="rgba(216, 27, 96, 0.9)"
                />{" "}
                sides, making it the most efficient shape for storing honey — they use the{" "}
                <InlineDropdown
                    correctAnswer="least"
                    options={["most", "least", "average"]}
                    color="#8B5CF6"
                    bgColor="rgba(139, 92, 246, 0.35)"
                />{" "}
                amount of wax while maximizing space. Nature discovered this optimization millions of years before humans!
            </InteractiveParagraph>

            <InteractiveParagraph className="mb-4 text-muted-foreground">
                The Fibonacci sequence appears everywhere in nature: the arrangement of leaves on a stem, the spiral of a nautilus shell, and even the branching of trees. If you start with{" "}
                <InlineStepper
                    initialValue={0}
                    min={0}
                    max={5}
                    color="#059669"
                    bgColor="rgba(5, 150, 105, 0.9)"
                />{" "}
                and{" "}
                <InlineStepper
                    initialValue={1}
                    min={0}
                    max={5}
                    color="#059669"
                    bgColor="rgba(5, 150, 105, 0.9)"
                />{" "}
                , each number is the sum of the two before it: 1, 1, 2, 3, 5, 8, 13, 21...
            </InteractiveParagraph>

            <InteractiveParagraph className="text-muted-foreground">
                Pi (π) is perhaps the most famous number in mathematics. This non-repeating decimal connects a circle's circumference to its diameter. If a circle has a diameter of{" "}
                <InlineStepper
                    initialValue={1}
                    min={1}
                    max={10}
                    color="#0EA5E9"
                    bgColor="rgba(14, 165, 233, 0.9)"
                />{" "}
                unit, its circumference is{" "}
                <InlineTextInput
                    correctAnswer="π"
                    placeholder="?"
                    color="#F59E0B"
                    bgColor="rgba(245, 158, 11, 0.35)"
                />{" "}
                ≈ 3.14159 units. Ancient civilizations approximated pi thousands of years ago, and mathematicians continue to calculate more digits today — currently over 100 trillion!
            </InteractiveParagraph>
        </Section>
    </FullWidthLayout>
];
