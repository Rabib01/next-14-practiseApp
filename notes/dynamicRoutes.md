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

// scrollable path within a page href=/dashboard#settings - this might be useful laterR
!

### Also remember that this is an option

## [id]

- loading.jsx
- page.jsx

### generating stattic params

```javascript
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /analytics
├ ○ /blogs
├   /blogs/[id]
│ └ ◐ /blogs/[id]
├ ○ /heavy
├ ◐ /heavy2
└ ○ /settings

○  (Static)             prerendered as static content
◐  (Partial Prerender)  prerendered as static HTML with dynamic server-streamed content

```

prerendered as static content - these are the absolutely best things - there are no dnamicity involved
server e kono isu render hoitese na - sob kisu html e render hoye diye ditese amader ke
partial prereder - must be the dynamic segment
at the end of the day everything is powered by node js thanks to ryan dahl

request time e - server runtime e oitake build korbe kore aader ke diye dibew
jodi amra id er vale ager theke bole dite pari j id er value ki hoite pare liek for example blogs/1 - blogs/25
taile eigula build time e build korte parbe

- these would occur in situations where the website only has 10 blog posts and will not increase in that number
- ek ekta param ek ekta id
- jodi amra id wise pass kore dei taile next js bujte parbe amader ei ei id niye kaaj kore jete hobe
-

```javascript
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /analytics
├ ○ /blogs
├   /blogs/[id]
│ ├ ◐ /blogs/[id]
│ ├ ○ /blogs/1
│ ├ ○ /blogs/2
│ └ ○ /blogs/3
├ ○ /heavy
├ ◐ /heavy2
└ ○ /settings

```

with static params this thing is differet !
next 16 e hoito jinish gula different

ssg - best
ekhon runtime build dile sob statically render hoye ache
runtime e reques tjacche na

### catch all segments

```javascript
[...folderName];
```

dynamic segments can be extended to catch all sub-sequent segments by adding an ellipsis inside of the brackets

### advantages :

- extreme level er nested routes through dynamic segments k help kore
- nut boltu optinal catch all segments o ache
-
