<h1>How to use</h1>

<h2>installation</h2>

1. Upload the zip to your server and extract it.
2. Use the RestAPI according to the guide below.

<h2>Anecdotes RestAPI Guide</h2>

<h3 dir="auto">URL:</h3>
<pre class="notranslate">
<code class="notranslate">{full folder path}/api</code>
</pre>

<h3 dir="auto">Method::</h3>
<pre class="notranslate">
<code class="notranslate">POST</code>
</pre>

<h3 dir="auto">Header:</h3>
<pre class="notranslate">
<code class="notranslate">Content-Type: application/json</code>
</pre>

<h3 dir="auto">Body Exemple:</h3>
<pre class="notranslate">
<code class="notranslate">
{
    "config": {
        "id": ["id"],
        "email": ["details.email"],
        "full_name": ["user_details.name", "user_details.last_name"]
    },
    "payload": {
        "id": "123",
        "user_details": {
            "name": "Sam",
            "last_name": "One",
            "id": "111"
        },
        "details": {
            "email": "1@1.com"
        }
    }
}
</code>
</pre>

<h3 dir="auto">Response Example:</h3>
<pre class="notranslate">
<code class="notranslate">
{
    "id": "123",
    "email": "1@1.com",
    "full_name": "SamOne"
}
</code>
</pre>