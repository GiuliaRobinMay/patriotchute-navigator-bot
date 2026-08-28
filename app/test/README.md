# Matcher tests

    python3 app/build_app.py && node app/test/matcher.test.js

42 cases of how members actually type, including misspellings. The harness
stubs a minimal DOM and runs the real shipped script, so it tests the built
`index.html` rather than a copy of the logic.

Regenerate the harness after changing the template: it embeds the built script.
