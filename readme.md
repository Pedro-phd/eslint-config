# ⚙️ @phd/Eslint config
### Tasks
Tasks to finalize the package
- [x] Vue rules 
- [ ] React rules
- [ ] Node rules

## Usagem

First step
```bash
$ npm install eslit-config-phd
```

in `eslintrs.js`

```js
module.exports {
	//... other configs
	extendes: ['eslint-config-phd/vue']
	
	// change vue to you framework
	// ... more configs
}

```

## Rules
### vue

``` js
printWidth:  80,
singleQuote:  true,
semi:  false,
trailingComma:  'es5',
vueIndentScriptAndStyle:  true,
tabWidth:  2,
```