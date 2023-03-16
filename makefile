install:
	npm install
	
gendiff:
	bin/gendiff.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npx jest --verbose

cover:
	npx jest --coverage