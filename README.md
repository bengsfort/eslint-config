# eslint-config

Repo containing my personal eslint configs. Extensions Welcome.

## Releasing

Versioning is handled via [`@yarnpkg/plugin-version`](https://yarnpkg.com/cli/version).

```sh
# Releasing just one package:
$ yarn version <strategy> --immediate
# ... commit + push ...
$ yarn npm publish

# Releasing all lazily
$ yarn version <strategy> --deferred
$ yarn version apply (--recursive|--all)
# ...commit + push ...
$ yarn publish-all # from root
```

## @todo

- [ ] Github actions for auto releasing
- [ ] Proper documentation, code examples, etc.
- [ ] eslint 9 support (esm support)
