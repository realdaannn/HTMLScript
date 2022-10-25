# HTMLScript
<h3> Summary </h3>
<p>  HTMLScript is a language extension to HTML, it allows programmers to write HTML files in a new way.  HTMLS only works on a node server that calls the parser before sending the HTML file.  HTMLS expands standard html and allows the programmer to use html templates in the html file, by including a file containing any amount of html code.  HTMLS also allows the programmer to write programatic html code, by using javascript inside the body of html using  the code tags any value or string can be output from javascript directly to the html content of the page. </p>
<h3> Features </h3>
<ul>
  <li><h6>\#include</h6><p>- Include another html file.</p><p> useage: \#include filename </p></li>
  <li><h6>\{ ... \}</h6><p>- Inject return of js code into html file. Returning a value or string from this tag will write all data in the var returned to the html content of the page.</p><p> useage: \{ ...JSCODE...return... \} </p></li>
  <li><h6>\#style</h6><p>-Add a stylesheet link to the html content.</p><p>useage:\#style filename</p></li>
 </ul>
<h4>Node Server</h4>
<p>
  An example of the node server can be found in the examples section.  The node server needs to call parseHTMLS on the file before piping it to the client,  this function will extract all of the htmls code and replace it with the equivalent html code. HTMLS must be parsed by the server due to a number of issues inherent to javascript.
</p>
<h4>Includes</h4>
<p>
  Includes let the programmer use templated html code in many files while only writing that code once, this is useful for menus and menubars or for standardizing layouts throughout a website.  To write a template file, leave out the standard html, body, and head tags and use only the tags that represent that view. There are two standard schemes; to start with a div, or to start with the content.  If starting with a div the include call will be placed closer to global scope, and if starting with the content the include call should be placed within a div.
</p>
<h4>Code Tags</h4>
<p>
</p>
