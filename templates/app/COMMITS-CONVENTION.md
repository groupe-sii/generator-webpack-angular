# Git commit message convention

```
<type>(<scope>): <subject>

<body>
```

All lines are wrapped at 100 characters !

## Allowed `<type>`

* feat (feature)
* fix (bug fix)
* docs (documentation)
* style (formatting, missing semi colons, …)
* refactor
* test (when adding missing tests)
* chore (maintain)

## Allowed `<scope>`:

Scope could be anything specifying place of the commit change. For example $location, $browser, compiler, scope, ng:href, etc...

## Breaking changes

All breaking changes have to be mentioned in message body, on separated line:

```
Breaks removed $browser.setUrl() method (use $browser.url(newUrl))
Breaks ng:repeat option is no longer supported on selects (use ng:options)
```

## Message body

uses the imperative, present tense: “change” not “changed” nor “changes”
includes motivation for the change and contrasts with previous behavior

### Referencing issues

Closed bugs should be listed on a separate line in the body prefixed with "Closes" keyword like this:

```
Closes #234
```

or in case of multiple issues:

```
Closes #123, #245, #992
```

## Commit message hook

To contribute, commit messages must follow the abobe convention.
To be certain this convention is followed, install the given hook.

Copy `tools/git/commit-msg.js` file to `.git/hooks/commit-msg` location:

```sh
$ ln -s tools/git/commit-msg.js .git/hooks/commit-msg
```

## Rebase

Configure your local git yo pull in `rebase` mode instead of default `merge` mode:

```sh
$ git config pull.rebase true
```

Among other things, this will avoid this king of messages:

```
Merge branch 'develop' of https://[URL] into develop
```
