install:
	npm ci

build:
	rm -rf dist/
	npm run build

publish:
	npm publish --dry-run
