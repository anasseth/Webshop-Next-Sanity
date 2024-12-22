import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision'
import { schemaType } from '../schema';

const SanityConfig = defineConfig({
    name: "default",
    title: "My-Web-Shop",
    projectId: "q3yngrik",
    dataset: "production",
    basePath: "/studio",
    plugins: [structureTool(), visionTool()],
    schema: {
        types: schemaType
    }
})

export default SanityConfig;