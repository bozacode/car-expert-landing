# ProAuto24 Blog Publishing Guide

## Overview

The ProAuto24 blog system uses a simple JSON-based approach for storing and displaying blog posts. This makes it easy to publish new content without needing a database or complex CMS.

## File Structure

- `blog.html` - Main blog listing page
- `blog-post.html` - Individual blog post page template
- `blog-data.json` - JSON file containing all blog posts

## How to Add a New Blog Post

### Step 1: Open `blog-data.json`

Open the `blog-data.json` file in your code editor.

### Step 2: Add Your Post

Add a new post object to the `posts` array. Here's the structure:

```json
{
  "id": "3",
  "title": {
    "de": "Ihr Artikel-Titel auf Deutsch",
    "en": "Your Article Title in English"
  },
  "slug": "ihr-artikel-slug",
  "excerpt": {
    "de": "Eine kurze Zusammenfassung des Artikels auf Deutsch.",
    "en": "A brief summary of the article in English."
  },
  "author": "ProAuto24 Team",
  "date": "2025-01-25",
  "category": {
    "de": "Kategorie",
    "en": "Category"
  },
  "tags": ["tag1", "tag2", "tag3"],
  "featuredImage": "/images/blog/your-image.jpg",
  "content": {
    "de": "<p>Ihr Artikelinhalt auf Deutsch. Sie können HTML verwenden.</p><h2>Überschrift</h2><p>Mehr Inhalt...</p>",
    "en": "<p>Your article content in English. You can use HTML.</p><h2>Heading</h2><p>More content...</p>"
  },
  "published": true
}
```

### Step 3: Field Descriptions

- **id**: Unique identifier (use incrementing numbers: "1", "2", "3", etc.)
- **title**: Object with "de" (German) and "en" (English) versions
- **slug**: URL-friendly version of the title (lowercase, hyphens instead of spaces)
  - Example: "So funktioniert die Plattform" → "so-funktioniert-die-plattform"
- **excerpt**: Short summary (2-3 sentences) in both languages
- **author**: Author name
- **date**: Publication date in YYYY-MM-DD format
- **category**: Category name in both languages
- **tags**: Array of relevant tags (lowercase, no spaces)
- **featuredImage**: Path to featured image (optional, can be empty string "")
- **content**: Full article content with HTML tags
- **published**: Set to `true` to publish, `false` to hide

### Step 4: HTML Content Tips

You can use HTML tags in the content field:

- `<p>` for paragraphs
- `<h2>`, `<h3>` for headings
- `<ul>`, `<ol>`, `<li>` for lists
- `<a href="...">` for links
- `<strong>`, `<em>` for emphasis
- `<img src="..." alt="...">` for images

Example:
```html
<p>This is a paragraph.</p>
<h2>This is a heading</h2>
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
</ul>
```

### Step 5: Save and Deploy

1. Save the `blog-data.json` file
2. Deploy to your server
3. Visit `/blog.html` to see your new post

## Best Practices

### Slug Creation
- Use lowercase letters
- Replace spaces with hyphens
- Remove special characters
- Keep it short and descriptive
- Example: "Neue Features in Q1 2026" → "neue-features-q1-2026"

### Content Formatting
- Use proper HTML structure
- Keep paragraphs short (3-4 sentences)
- Use headings to break up content
- Add images where appropriate
- Ensure both German and English versions are complete

### Images
- Recommended size: 1200x630px for featured images
- Format: JPG or PNG
- Store in `/images/blog/` directory
- Optimize images before uploading

### Categories
Common categories:
- "Allgemein" / "General"
- "Plattform" / "Platform"
- "Tipps" / "Tips"
- "News" / "News"
- "Expertenwissen" / "Expert Knowledge"

### Tags
Use relevant, lowercase tags:
- platform, beta, features, tips, news, automotive, etc.

## Example: Complete Blog Post

```json
{
  "id": "4",
  "title": {
    "de": "10 Tipps für den Autokauf 2026",
    "en": "10 Tips for Buying a Car in 2026"
  },
  "slug": "10-tipps-autokauf-2026",
  "excerpt": {
    "de": "Entdecken Sie unsere Top-Tipps für einen erfolgreichen Autokauf im Jahr 2026.",
    "en": "Discover our top tips for a successful car purchase in 2026."
  },
  "author": "ProAuto24 Team",
  "date": "2026-01-30",
  "category": {
    "de": "Tipps",
    "en": "Tips"
  },
  "tags": ["autokauf", "tipps", "ratgeber", "2026"],
  "featuredImage": "/images/blog/autokauf-tipps.jpg",
  "content": {
    "de": "<p>Der Autokauf kann überwältigend sein. Hier sind unsere Top-Tipps für 2026:</p><h2>1. Recherchieren Sie gründlich</h2><p>Bevor Sie ein Auto kaufen, sollten Sie sich über verschiedene Modelle informieren.</p><h2>2. Budget planen</h2><p>Stellen Sie sicher, dass Sie ein realistisches Budget haben.</p>",
    "en": "<p>Buying a car can be overwhelming. Here are our top tips for 2026:</p><h2>1. Research Thoroughly</h2><p>Before buying a car, you should inform yourself about different models.</p><h2>2. Plan Your Budget</h2><p>Make sure you have a realistic budget.</p>"
  },
  "published": true
}
```

## Troubleshooting

### Post Not Showing
- Check that `"published": true`
- Verify the JSON syntax is correct (use a JSON validator)
- Check browser console for errors
- Ensure the slug is unique

### Images Not Loading
- Verify image path is correct
- Check that image file exists in the specified location
- Use relative paths starting with `/`

### Content Not Displaying
- Check HTML syntax
- Ensure both German and English content are provided
- Verify JSON structure is correct

## Advanced: Using a Content Editor

For easier content creation, you can:

1. Write content in Markdown
2. Convert to HTML using a tool like [Markdown to HTML](https://www.markdowntohtml.com/)
3. Paste the HTML into the JSON file

## Future Enhancements

Potential improvements:
- Admin panel for easier publishing
- Markdown support
- Image upload interface
- Draft/publish workflow
- SEO optimization tools

## Support

For questions or issues, contact: info@proauto24.de

