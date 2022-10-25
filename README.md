# HTMLScript
<h3> Summary </h3>
<p> HTMLScript is a language extension to HTML, it allows programmers to write HTML files in a new way.  HTMLS only works on a node server which calls the parser before sending the HTML file and expands the HTMLS code to plain HTML and reduces compatability issues.  HTMLS allows for including HTML template  files in an HTML file by using the #include directive, using js to inject html code into the html file for programatic html code using the code braces "\{" and  "\}". </p>
<h3> Features </h3>
<ul>
  <li><h6>\#include</h6><p>- Include another html file.</p><p> useage: \#include filename </p></li>
  <li><h6>\{ ... \}</h6><p>- Inject return of js code into html file. Returning a value or string from this tag will write all data in the var returned to the html content of the page.</p><p> useage: \{ ...JSCODE...return... \} </p></li>
  <li><h6>\#style<h6><p>-Add a stylesheet link to the html content.</p><p>useage:\#style filename</p></li>
 </ul>
