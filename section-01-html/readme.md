Frontend Bootcamp

Este file explica la estructura de la clase de noviembre 07/2022

# 01 Basic Layout

### HTML Basic Examples

In this chapter we will show some basic HTML examples.

Don't worry if we use tags you have not learned about yet.

### HTML Documents

All HTML documents must start with a document type declaration: <!DOCTYPE html>.

The HTML document itself begins with <html> and ends with </html>.

The visible part of the HTML document is between <body> and </body>.

Example

<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
The <!DOCTYPE> Declaration
The <!DOCTYPE> declaration represents the document type, and helps browsers to display web pages correctly.

It must only appear once, at the top of the page (before any HTML tags).

The <!DOCTYPE> declaration is not case sensitive.

The <!DOCTYPE> declaration for HTML5 is:

<!DOCTYPE html>

# 02 Meta Tags

The <meta> tag defines metadata about an HTML document. Metadata is data (information) about data.

<meta> tags always go inside the <head> element, and are typically used to specify character set, page description, keywords, author of the document, and viewport settings.

Metadata will not be displayed on the page, but is machine parsable.

Metadata is used by browsers (how to display content or reload page), search engines (keywords), and other web services.

There is a method to let web designers take control over the viewport (the user's visible area of a web page), through the <meta> tag (See "Setting The Viewport" example below).

# 03 Typography

The field of web typography has grown substantially over time. There are a couple of different reasons for its rise in popularity; one widely acknowledged reason is the development of a system for embedding our own web fonts on a website.

In the past we were limited to a small number of typefaces that we could use on a website. These typefaces were the most commonly installed fonts on computers, so they were the most likely to render properly on-screen. If a font wasn’t installed on a computer, it wouldn’t render on the website either. Now, with the ability to embed fonts, we have a much larger palette of typefaces to choose from, including those that we add to a website.

While the ability to embed fonts gives us access to countless new typefaces, it’s also important for us to know the basic principles of typography. In this lesson we’re going to take a look at some of these basic principles and how to apply them to our web pages using HTML and CSS.

# 04 Links

HTML links are hyperlinks.

You can click on a link and jump to another document.

When you move the mouse over a link, the mouse arrow will turn into a little hand.

Note: A link does not have to be text. A link can be an image or any other HTML element!

HTML Links - Syntax
The HTML <a> tag defines a hyperlink. It has the following syntax:

<a href="url">link text</a>
The most important attribute of the <a> element is the href attribute, which indicates the link's destination.

The link text is the part that will be visible to the reader.

Clicking on the link text, will send the reader to the specified URL address.

# 05 Images

### HTML Images Syntax

The HTML <img> tag is used to embed an image in a web page.

Images are not technically inserted into a web page; images are linked to web pages. The <img> tag creates a holding space for the referenced image.

The <img> tag is empty, it contains attributes only, and does not have a closing tag.

The <img> tag has two required attributes:

src - Specifies the path to the image
alt - Specifies an alternate text for the image

# 06 Lists

HTML Lists
HTML lists allow web developers to group a set of related items in lists.

Example

An unordered HTML list:

- Item
- Item
- Item
- Item

An ordered HTML list:

1. First item
2. Second item
3. Third item
4. Fourth item

Unordered HTML List
An unordered list starts with the <ul> tag. Each list item starts with the <li> tag.

The list items will be marked with bullets (small black circles) by default:

Example

- Coffee
- Tea
- Milk

Ordered HTML List
An ordered list starts with the <ol> tag. Each list item starts with the <li> tag.

The list items will be marked with numbers by default:

Example

1. Coffee
2. Tea
3. Milk

### HTML Description Lists

HTML also supports description lists.

A description list is a list of terms, with a description of each term.

The <dl> tag defines the description list, the <dt> tag defines the term (name), and the <dd> tag describes each term:

Example

Coffee
: black hot drink

Milk
: white cold drink

### HTML List Tags

Tag Description

<ul>	Defines an unordered list
<ol>	Defines an ordered list
<li>	Defines a list item
<dl>	Defines a description list
<dt>	Defines a term in a description list
<dd>	Describes the term in a description list
For a complete list of all available HTML tags, visit our HTML Tag Reference.

# 07 Layout

### HTML Layout Elements

HTML has several semantic elements that define the different parts of a web page:

### HTML5 Semantic Elements

<header> - Defines a header for a document or a section
<nav> - Defines a set of navigation links
<section> - Defines a section in a document
<article> - Defines an independent, self-contained content
<aside> - Defines content aside from the content (like a sidebar)
<footer> - Defines a footer for a document or a section
<details> - Defines additional details that the user can open and close on demand
<summary> - Defines a heading for the <details> element
You can read more about semantic elements in our HTML Semantics chapter.

### HTML Layout Techniques

There are four different techniques to create multicolumn layouts. Each technique has its pros and cons:

CSS framework
CSS float property
CSS flexbox
CSS grid
