import { Helmet } from "react-helmet-async";

const LiSpan = () => {
  return (
    <>
      <Helmet>
        <title>Runtime Error</title>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n         body {font-family:"Verdana";font-weight:normal;font-size: .7em;color:black;} \n         p {font-family:"Verdana";font-weight:normal;color:black;margin-top: -5px}\n         b {font-family:"Verdana";font-weight:bold;color:black;margin-top: -5px}\n         H1 { font-family:"Verdana";font-weight:normal;font-size:18pt;color:red }\n         H2 { font-family:"Verdana";font-weight:normal;font-size:14pt;color:maroon }\n         pre {font-family:"Consolas","Lucida Console",Monospace;font-size:11pt;margin:0;padding:0.5em;line-height:14pt}\n         .marker {font-weight: bold; color: black;text-decoration: none;}\n         .version {color: gray;}\n         .error {margin-bottom: 10px;}\n         .expandable { text-decoration:underline; font-weight:bold; color:navy; cursor:pointer; }\n         @media screen and (max-width: 639px) {\n          pre { width: 440px; overflow: auto; white-space: pre-wrap; word-wrap: break-word; }\n         }\n         @media screen and (max-width: 479px) {\n          pre { width: 280px; }\n         }\n        ',
          }}
        />
      </Helmet>
      <span>
        <h1>
          Server Error in &#39;/&#39; Application.
          <hr width="100%" size={1} color="silver" />
        </h1>
        <h2>
          {" "}
          <i>Runtime Error</i>{" "}
        </h2>
      </span>
      <div style={{ fontFamily: "Arial, Helvetica, Geneva, sans-serif" }}>
        <b> Description: </b>An application error occurred on the server. The
        current custom error settings for this application prevent the details
        of the application error from being viewed remotely (for security
        reasons). It could, however, be viewed by browsers running on the local
        server machine.
        <br />
        <br />
        <b>Details:</b> To enable the details of this specific error message to
        be viewable on remote machines, please create a &lt;customErrors&gt; tag
        within a &#34;web.config&#34; configuration file located in the root
        directory of the current web application. This &lt;customErrors&gt; tag
        should then have its &#34;mode&#34; attribute set to &#34;Off&#34;.
        <br />
        <br />
        <table width="100%" style={{ backgroundColor: "#ffffcc" }}>
          <tbody>
            <tr>
              <td>
                <code>
                  <pre>
                    {"\n"}&lt;!-- Web.Config Configuration File --&gt;{"\n"}
                    {"\n"}&lt;configuration&gt;{"\n"}
                    {"    "}&lt;system.web&gt;{"\n"}
                    {"        "}&lt;customErrors mode=&#34;Off&#34;/&gt;{"\n"}
                    {"    "}&lt;/system.web&gt;{"\n"}&lt;/configuration&gt;
                  </pre>{" "}
                </code>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <b>Notes:</b> The current error page you are seeing can be replaced by a
        custom error page by modifying the &#34;defaultRedirect&#34; attribute
        of the application&#39;s &lt;customErrors&gt; configuration tag to point
        to a custom error page URL.
        <br />
        <br />
        <table width="100%" style={{ backgroundColor: "#ffffcc" }}>
          <tbody>
            <tr>
              <td>
                <code>
                  <pre>
                    {"\n"}&lt;!-- Web.Config Configuration File --&gt;{"\n"}
                    {"\n"}&lt;configuration&gt;{"\n"}
                    {"    "}&lt;system.web&gt;{"\n"}
                    {"        "}&lt;customErrors mode=&#34;RemoteOnly&#34;
                    defaultRedirect=&#34;mycustompage.htm&#34;/&gt;{"\n"}
                    {"    "}&lt;/system.web&gt;{"\n"}&lt;/configuration&gt;
                  </pre>{" "}
                </code>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
      </div>
    </>
  );
};
export default LiSpan;
