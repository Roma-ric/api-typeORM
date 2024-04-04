

1. Initialiser yarn

       yarn init

2. Installer **typescript**
       
       yarn add typescript --save-dev

3. Créer le dossier **src** le fichier **index.ts**

       mkdir src/index.ts

4. Créer le fichier tsconfig.json et remplir 

```javascript
{
	"compilerOptions": {
		"target": "es6",
		"module": "commonjs",
		"lib": [
			"dom",
			"es6",
			"es2017",
			"esnext.asynciterable"
		],
		"skipLibCheck": true,
		"sourceMap": true,
		"outDir": "./dist",
		"moduleResolution": "node",
		"removeComments": true,
		"noImplicitAny": true,
		"strictNullChecks": true,
		"strictFunctionTypes": true,
		"noImplicitThis": true,
		"noUnusedLocals": false,
		"noUnusedParameters": false,
		"noImplicitReturns": true,
		"noFallthroughCasesInSwitch": true,
		"allowSyntheticDefaultImports": true,
		"esModuleInterop": true,
		"emitDecoratorMetadata": true,
		"experimentalDecorators": true,
		"resolveJsonModule": true,
		"baseUrl": "."
	},
	"exclude": ["node_modules"],
	"include": ["./index.ts", "./src/**/*.tsx", "./src/**/*.ts"]
}
```

5. Installer les dépendences

       yarn add typeorm --save
       yarn add reflect-metadata --save
       yarn add @types/node --save-dev
	   yarn add @types/express --save-dev
       yarn add mysql2 --save
	   yarn add express
	   yarn add ts-node
	   yarn add nodemon