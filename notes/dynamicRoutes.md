when you dont know the exact segment names ahead of time and want to create routes from dynamic data you can use dynamic segments that are filled at request time or prerendered at build time

Route segment jeita thake jeigulka amraa ahead of time jani na route segment er nam kirokhom hobe
domain/dashhboard/settings - These were hardcoded urls !
In our scenario we have a bloglist that has 10 blog posts that are each coming from individual apis
all of them has different ids.
Ei khetre 100ta blogpost thakle oviously 100 ta folder toh ar kora jabena

### These are known as dynamic segments

- these blogs/1 blogs/2 are known as route parameters
- just wrap the folder as [keyName] keyName inside of a third bracket!
- domainName/blogs?id=5 -> this is known as query string or a search parameter
- eitar vitore [id] id folder er vitore amra page..js dib

```javascript
export default function SingleBlog({ params }) {
  // params.id er moddhe amra oi blogPost er id ta pabo
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}
```
