export const HeroImageSchema = {
    name: "heroImage",
    type: "document",
    title: "Two Hero Images",
    fields: [
        {
            name: "imageOne",
            title: "First Image",
            type: "image"
        },
        {
            name: "imageTwo",
            title: "Second Image",
            type: "image"
        }
    ]
}

export default HeroImageSchema;