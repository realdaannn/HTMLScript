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
  An example of the node server can be found in the examples section.  The node server needs to call parseHTMLS on the file before piping it to the client.  This function will extract all of the htmls code and replace it with the equivalent html code.  The process used in the example stops any compatability issues that the client might have while parsing, by keeping it all on the server and only sending basic html to the client.
</p>
<h4>Includes</h4>
<p>
</p>
<h4>Code Tags</h4>
<p>
</p>
