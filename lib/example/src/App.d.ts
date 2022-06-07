import { ExampleDescription } from '@jsonforms/examples';
import { JsonFormsCellRendererRegistryEntry, JsonFormsRendererRegistryEntry } from '@jsonforms/core';
import 'highlight.js/styles/default.css';
declare type AppProps = {
    examples: ExampleDescription[];
    cells: JsonFormsCellRendererRegistryEntry[];
    renderers: JsonFormsRendererRegistryEntry[];
};
declare const App: ({ examples, cells, renderers }: AppProps) => JSX.Element;
export default App;
