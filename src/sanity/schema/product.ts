const ProductSchema = {
    name: "product",
    title: "Products",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name of Product",
            type: "string"
        },
        {
            name: "images",
            title: "Product Images",
            type: "array",
            of: [{ type: "image" }]
        },
        {
            name: "description",
            title: "Product Description",
            type: "text"
        },
        {
            name: "slug",
            title: "Product Slug",
            type: "slug",
            options: {
                source: "name"
            }
        },
        {
            name: "price",
            title: "Price",
            type: "number"
        },
        {
            name: "category",
            title: "Product Category",
            type: "reference",
            to: [{ type: "category" }]
        }

    ]
}

export default ProductSchema