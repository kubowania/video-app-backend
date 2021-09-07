export default {
    name: "video",
    title: "Video",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: Rule => Rule.required().warning('A Title is required')
        },
        {
            name: "id",
            title: "ID",
            type: "number",
            validation: Rule => Rule.required().warning('An ID is required')
        },
        {
            name: "videoAsset",
            title: "Video Asset",
            type: "mux.video",
        },
        {
            name: "thumbnail",
            title: "Thumbnail",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "description",
            title: "Description",
            type: "string",
        },
        {
            name: "date",
            title: "Date",
            type: "date",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: 'title',
                maxLength: 100
            },
            validation: Rule => Rule.required().warning('A Slug is required')
        },
        {
            name: "author",
            title: "Author",
            type: "author",
        },
        {
            name: "interactions",
            title: "Interactions",
            type: "array",
            of: [{ type: "interaction"}]
        },
    ]
}