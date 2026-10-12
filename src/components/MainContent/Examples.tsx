import TabButton from "../TabButton.tsx";
import {EXAMPLES } from "../../data.js";
import { useState } from "react";

type Topic = keyof typeof EXAMPLES;

export default function Examples() {
      const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const selectedExample = selectedTopic ? EXAMPLES[selectedTopic] : null;

  function handleSelect(topic: Topic) {
    setSelectedTopic(topic);
  }

    return (
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>

          {selectedExample ? (
            <div id="tab-content">
              <h3>{selectedExample.title}</h3>
              <p>{selectedExample.desc}</p>
              <pre>
                <code>{selectedExample.code}</code>
              </pre>
            </div>
          ) : (
            <p>Please select a topic.</p>
          )}
        </section>
    )
}